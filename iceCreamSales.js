const salesData = require('./sales_data');

class IceCreamSalesAnalyzer {
    constructor() {
        this.salesRecords = [];
    }

    // Read and parse CSV data
    parseCSVData(csvContent) {
        const lines = csvContent.trim().split('\n');
        const headers = lines[0].split(',');
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const record = {
                date: new Date(values[0]),
                sku: values[1],
                unitPrice: parseFloat(values[2]),
                quantity: parseInt(values[3]),
                totalPrice: parseFloat(values[4])
            };
            this.salesRecords.push(record);
        }
    }

    // 1. Calculate total sales of the store
    calculateTotalSales() {
        let totalSales = 0;
        for (let i = 0; i < this.salesRecords.length; i++) {
            totalSales += this.salesRecords[i].totalPrice;
        }
        return totalSales;
    }

    // 2. Calculate month-wise sales totals
    calculateMonthWiseSales() {
        const monthWiseSales = new Map();
        
        for (let i = 0; i < this.salesRecords.length; i++) {
            const record = this.salesRecords[i];
            const monthKey = `${record.date.getFullYear()}-${String(record.date.getMonth() + 1).padStart(2, '0')}`;
            
            if (monthWiseSales.has(monthKey)) {
                monthWiseSales.set(monthKey, monthWiseSales.get(monthKey) + record.totalPrice);
            } else {
                monthWiseSales.set(monthKey, record.totalPrice);
            }
        }
        
        return monthWiseSales;
    }

    // 3. Find most popular item (by quantity) each month and calculate min, max, avg orders
    findMostPopularItemByMonth() {
        const monthlyData = new Map();
        
        // Group data by month and SKU
        for (let i = 0; i < this.salesRecords.length; i++) {
            const record = this.salesRecords[i];
            const monthKey = `${record.date.getFullYear()}-${String(record.date.getMonth() + 1).padStart(2, '0')}`;
            
            if (!monthlyData.has(monthKey)) {
                monthlyData.set(monthKey, new Map());
            }
            
            const monthData = monthlyData.get(monthKey);
            if (!monthData.has(record.sku)) {
                monthData.set(record.sku, []);
            }
            
            monthData.get(record.sku).push(record.quantity);
        }
        
        const result = new Map();
        
        // Find most popular item for each month
        for (const [month, skuData] of monthlyData) {
            let maxTotalQuantity = 0;
            let mostPopularItem = '';
            const itemStats = new Map();
            
            // Calculate total quantity and stats for each SKU
            for (const [sku, quantities] of skuData) {
                let totalQuantity = 0;
                let minQuantity = quantities[0];
                let maxQuantity = quantities[0];
                
                for (let i = 0; i < quantities.length; i++) {
                    totalQuantity += quantities[i];
                    if (quantities[i] < minQuantity) minQuantity = quantities[i];
                    if (quantities[i] > maxQuantity) maxQuantity = quantities[i];
                }
                
                const avgQuantity = totalQuantity / quantities.length;
                
                itemStats.set(sku, {
                    totalQuantity,
                    minQuantity,
                    maxQuantity,
                    avgQuantity,
                    orderCount: quantities.length
                });
                
                if (totalQuantity > maxTotalQuantity) {
                    maxTotalQuantity = totalQuantity;
                    mostPopularItem = sku;
                }
            }
            
            result.set(month, {
                item: mostPopularItem,
                stats: itemStats.get(mostPopularItem)
            });
        }
        
        return result;
    }

    // 4. Find items that generate the most revenue each month
    findHighestRevenueItemByMonth() {
        const monthlyRevenue = new Map();
        
        // Group revenue by month and SKU
        for (let i = 0; i < this.salesRecords.length; i++) {
            const record = this.salesRecords[i];
            const monthKey = `${record.date.getFullYear()}-${String(record.date.getMonth() + 1).padStart(2, '0')}`;
            
            if (!monthlyRevenue.has(monthKey)) {
                monthlyRevenue.set(monthKey, new Map());
            }
            
            const monthData = monthlyRevenue.get(monthKey);
            if (monthData.has(record.sku)) {
                monthData.set(record.sku, monthData.get(record.sku) + record.totalPrice);
            } else {
                monthData.set(record.sku, record.totalPrice);
            }
        }
        
        const result = new Map();
        
        // Find highest revenue item for each month
        for (const [month, skuRevenue] of monthlyRevenue) {
            let maxRevenue = 0;
            let topRevenueItem = '';
            
            for (const [sku, revenue] of skuRevenue) {
                if (revenue > maxRevenue) {
                    maxRevenue = revenue;
                    topRevenueItem = sku;
                }
            }
            
            result.set(month, {
                item: topRevenueItem,
                revenue: maxRevenue
            });
        }
        
        return result;
    }

    // 5. Find most popular item on weekends (Saturday = 6, Sunday = 0)
    findMostPopularWeekendItem() {
        const weekendQuantities = new Map();
        
        for (let i = 0; i < this.salesRecords.length; i++) {
            const record = this.salesRecords[i];
            const dayOfWeek = record.date.getDay();
            
            // Check if it's weekend (Saturday = 6, Sunday = 0)
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                if (weekendQuantities.has(record.sku)) {
                    weekendQuantities.set(record.sku, weekendQuantities.get(record.sku) + record.quantity);
                } else {
                    weekendQuantities.set(record.sku, record.quantity);
                }
            }
        }
        
        let maxQuantity = 0;
        let mostPopularWeekendItem = '';
        
        for (const [sku, quantity] of weekendQuantities) {
            if (quantity > maxQuantity) {
                maxQuantity = quantity;
                mostPopularWeekendItem = sku;
            }
        }
        
        return {
            item: mostPopularWeekendItem,
            totalQuantity: maxQuantity
        };
    }

    // Generate comprehensive report
    generateReport() {
        console.log("=".repeat(60));
        console.log("           ICE CREAM PARLOR SALES REPORT");
        console.log("=".repeat(60));
        
        // 1. Total Sales
        const totalSales = this.calculateTotalSales();
        console.log(`\n1. TOTAL SALES OF THE STORE: ₹${totalSales.toFixed(2)}`);
        
        // 2. Month-wise Sales
        const monthWiseSales = this.calculateMonthWiseSales();
        console.log(`\n2. MONTH-WISE SALES TOTALS:`);
        console.log("-".repeat(40));
        for (const [month, sales] of monthWiseSales) {
            console.log(`   ${month}: ₹${sales.toFixed(2)}`);
        }
        
        // 3. Most Popular Item by Month
        const popularItems = this.findMostPopularItemByMonth();
        console.log(`\n3. MOST POPULAR ITEM EACH MONTH (By Quantity):`);
        console.log("-".repeat(60));
        for (const [month, data] of popularItems) {
            console.log(`   ${month}: ${data.item}`);
            console.log(`      Total Quantity Sold: ${data.stats.totalQuantity}`);
            console.log(`      Min Orders: ${data.stats.minQuantity}`);
            console.log(`      Max Orders: ${data.stats.maxQuantity}`);
            console.log(`      Average Orders: ${data.stats.avgQuantity.toFixed(2)}`);
            console.log(`      Number of Transactions: ${data.stats.orderCount}`);
            console.log();
        }
        
        // 4. Highest Revenue Item by Month
        const revenueItems = this.findHighestRevenueItemByMonth();
        console.log(`4. ITEMS GENERATING MOST REVENUE EACH MONTH:`);
        console.log("-".repeat(50));
        for (const [month, data] of revenueItems) {
            console.log(`   ${month}: ${data.item} (₹${data.revenue.toFixed(2)})`);
        }
        
        // 5. Most Popular Weekend Item
        const weekendItem = this.findMostPopularWeekendItem();
        console.log(`\n5. MOST POPULAR WEEKEND ITEM:`);
        console.log("-".repeat(40));
        if (weekendItem.item) {
            console.log(`   Item: ${weekendItem.item}`);
            console.log(`   Total Weekend Quantity: ${weekendItem.totalQuantity}`);
        } else {
            console.log(`   No weekend sales found in the data`);
        }
        
        console.log("\n" + "=".repeat(60));
    }
}

// Main execution function
function main() {
    try {
        console.log('Loading sales data...');
        
        const analyzer = new IceCreamSalesAnalyzer();
        analyzer.parseCSVData(salesData);
        
        console.log(`Successfully loaded ${analyzer.salesRecords.length} sales records`);
        
        analyzer.generateReport();
        
    } catch (error) {
        console.error('Error processing sales data:', error.message);
        console.error('Stack trace:', error.stack);
    }
}

// Run the program
main();