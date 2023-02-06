const pool = require('./../../config/database')


module.exports = {
    create : (data,callback) => {
        pool.query(
            `insert into registrations(restaurant_name,contact_name,pincode,location,website,phone_number,average_daily_transactions) 
            values(?,?,?,?,?,?,?)`,
            [
                data.restaurant_name,
                data.contact_name,
                data.pincode,
                data.location,
                data.website,
                data.phone_number,
                data.average_daily_transactions
            ],
            (error,results,fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
}