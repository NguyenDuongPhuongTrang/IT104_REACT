const response = {
                data: {
                    id: 1,
                    title: "Destructuring in JavaScript",
                    author: {
                        name: "Dev",
                        email: "Dev@gmail.com",
                    },
                },
};

const {title, author} = response.data;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

const { name: authorName, email: authorEmail } = author;
console.log(`Author Name: ${authorName}`);
console.log(`Author Email: ${authorEmail}`);

