const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Course {
    constructor(title, price, url) {
        this.title = title;
        this.price = price;
        this.url = url;
        this.id = uuidv4();
    }

    toJson() {
        return {
            title: this.title,
            price: this.price,
            url: this.url,
            id: this.id
        }
    }
    
    async save() {
        const info = await Course.getAll();
        info.push(this.toJson());
        console.log(info);
        new Promise((resolve, rejects) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'info.json'),
                JSON.stringify(info),
                (err) => {
                    if (err) rejects(err);
                    else resolve();
                }
            )
        });
    }

    static async getAll() {
        return await new Promise((resolve, rejects) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'info.json'),
                'utf-8',
                (err, content) => {
                    if (err) rejects(err);
                    else {
                        resolve(JSON.parse(content));
                }
            })
        });
        
    }
}

module.exports = Course;