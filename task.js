


db.users.insertMany([
    {user_id:1,
      user_name:"surbhi",
      contact_no:9414008874,
      address:"chandra nagar",
      Batch_no:"B29WD",
      codekata_problems_solved:600,
      placements:"appeared"
      

    },
    {user_id:2,
      user_name:"sandesh",
      contact_no:9515008874,
      address:"nitin nagar",
      Batch_no:"B29WD",
      codekata_problems_solved:400,
      placements:"appeared"
      
    },
    {user_id:3,
      user_name:"shubham",
      contact_no:9414008854,
      address:"chandravardai nagar",
      Batch_no:"B27WD",
      codekata_problems_solved:1000,
      placements:"appeared"
    },
    {user_id:4,
      user_name:"deepti",
      contact_no:8123456790,
      address:"shyam ganj",
      Batch_no:"C15WD",
      codekata_problems_solved:500,
      placements:"not-appeared"
     
    },
    {user_id:5,
      user_name:"shruti",
      contact_no:9414558874,
      address:"mansarovar",
      Batch_no:"C45WD",
      codekata_problems_solved:200,
      placements:"not-appeared"
    },

  ]);

  db.codekata.insertMany(
      [
          {
             topics:"input/output", 
             total_questions:20,  
             codekata_topics_id :101,
             
          },
          {
            topics:"arrays", 
           total_questions:300,  
           codekata_topics_id :102
      
        },
        {
            topics:"mathematics", 
           total_questions:192,
           codekata_topics_id :103
      
        },
        {
            topics:"numbers", 
           total_questions:22,
           codekata_topics_id :104
      
        },
        {
            topics:"looping", 
           total_questions:200,    
           codekata_topics_id :105
      
        },
        {
          topics:"objects", 
         total_questions:50,    
         codekata_topics_id :106
    
      },
      {
        topics:"company interviews questions", 
       total_questions:290,    
       codekata_topics_id :107
  
    },
    {
      topics:"functions", 
     total_questions:70,    
     codekata_topics_id :108

  },
      ]
  );

  db.attendance.insertMany([
      {
        attendance_id:1200,
        class_date:"1-10-2020",
        students_attended_class:[1,2,3,4,5]
      },
      {
        attendance_id:1201,
        class_date:"5-10-2020",
        students_attended_class:[1,2,4,5]
       
      },
      {
        attendance_id:1202,
        class_date:"15-10-2020",
        students_attended_class:[1,2,5]
       
      },
      {
        attendance_id:1203,
        class_date:"16-10-2020",
        students_attended_class:[1,2,3,4,5]
       
      },
      
      {
        attendance_id:1204,
        class_date:"19-10-2020",
        students_attended_class:[1,2,3,]
       
      },
      {
        attendance_id:1205,
        class_date:"1-11-2020",
        students_attended_class:[1,2,3,4,5]
      },
      {
        attendance_id:1206,
        class_date:"10-11-2020",
        students_attended_class:[1,2,3,4,5]
       
      },
      {
        attendance_id:1207,
        class_date:"12-11-2020",
        students_attended_class:[1,2,3,4,5]
       
      },
      {
        attendance_id:1208,
        class_date:"15-11-2020",
        students_attended_class:[2,3,4,5]
       
      },
      
      {
        attendance_id:1209,
        class_date:"21-11-2020",
        students_attended_class:[1,3,4,5]
       
      },
  ]);

  db.topics.insertMany([
  {
     session_topic_id:"ST201",
     session_topic:"React Intro",
     session_date:"1-10-2020"
     
  },
  {
    session_topic_id:"ST202",
    session_topic:"Hooks and types of hooks",
    session_date:"5-10-2020"
    
 },
 {
     
    session_topic_id:"ST203",
    session_topic:"React components",
    session_date:"15-10-2020"
    
 },
 {
    session_topic_id:"ST204",
    session_topic:"React Router",
    session_date:"16-10-2020"
    
 },
 {
    session_topic_id:"ST205",
    session_topic:"Context API",
    session_date:"19-10-2020"
    
 },
 {
    session_topic_id:"ST206",
    session_topic:"Javascript Intro",
    session_date:"1-11-2020"
    
 },
 {
    session_topic_id:"ST207",
    session_topic:"Window object",
    session_date:"10-11-2020"
    
 },
 {
    session_topic_id:"ST208",
    session_topic:"Callback",
    session_date:"12-11-2020"
    
 },
 {
    session_topic_id:"ST209",
    session_topic:"Mongo DB Intro",
    session_date:"15-11-2020"
    
 },
 {
    session_topic_id:"ST210",
    session_topic:"Aggregate operations in MongoDB",
    session_date:"21-11-2020"
    
 }
  
]);

db.tasks.insertMany([
    {
         task_id:500,
        session_topic_id:"ST201",
        task_name:"Design the given page using react- https://startbootstrap.com/snippets/pricing-table",
        task_date:"1-10-2020",
        task_submitted_user:[1,2,3,4,5]
       
    },
     {
         task_id:501,
        session_topic_id:"ST202",
        task_name:"To Do task. Add New Random Task with the Add button is clicked. When the Close button is clicked remove the task. https://www.bootdey.com/snippets/view/bs4-todo-list",
        task_date:"5-10-2020",
        task_submitted_user:[1,2,3,4,5]

    },
    
    {
        task_id:502,
       session_topic_id:"ST203",
       task_name:"https://startbootstrap.com/previews/sb-admin-2 Create a CRUD operation for Product and Users in Admin Panel",
       task_date:"15-10-2020",
       task_submitted_user:[1,3,4,5]

       
   },
   
   {
    task_id:503,
   session_topic_id:"ST204",
   task_name:"Design an UI to implement the CRUD // CRUD - Create,Read,Update,Delete // Dashboard // List Users - /users // Create User - /create-user // Edit User - /edit-user/:id // profile - /profile/:id // edit-profile – /edit-profile/:id",
   task_date:"16-10-2020",
   task_submitted_user:[2,3,4,5]

   
},

{
    task_id:504,
   session_topic_id:"ST205",
   task_name:"CRUD task completion",
   task_date:"19-10-2020",
   task_submitted_user:[1,2,4,5]

   
   
},

{
    task_id:505,
   session_topic_id:"ST206",
   task_name:"https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/edit?usp=sharing",
   task_date:"1-11-2020",
   task_submitted_user:[1,2,3,4,5]

   
},

{
    task_id:506,
   session_topic_id:"ST207",
   task_name:"no task",
   task_date:"10-11-2020",
   task_submitted_user:[1,2,3,4,5]

   
   
},

{
    task_id:507,
   session_topic_id:"ST208",
   task_name:"Callback Hell practice Task: https://docs.google.com/document/d/1K6jW6TPmqWvzoRAm2t-GlOAxKmMRsLt5zaCsdcH_3LM/edit",
   task_date:"12-11-2020",
   task_submitted_user:[1,2,3,4,5]

   
},

{
    task_id:508,
   session_topic_id:"ST209",
   task_name:"https://github.com/rvsp/database/tree/master/mongodb",
   task_date:"15-11-2020",
   task_submitted_user:[1,2,3,4,5]

   
},

{
    task_id:509,
   session_topic_id:"ST210",
   task_name:"Display the list of files and folders with its type in console. The Folder path will be passed has a parameter in command",
   task_date:"21-11-2020",       
    task_submitted_user:[1,2,3,4,5]

   
},

    
]);

db.company_drives.insertMany([
   
    {
        company_id:"C1",
        company_name:"Microsoft",
        arrival_date:"10-10-2020",
        placements:"appeared"
        
    },
    {
        company_id:"C2",
        company_name:"Google",
        arrival_date:"15-10-2020",
        placements:"appeared"
    },
    {
        company_id:"C3",
        company_name:"Octal Info Solutions",
        arrival_date:"12-10-2020",
        placements:"not appeared"
    },
    {
        company_id:"C4",
        company_name:"Accenture",
        arrival_date:"25-10-2020",
        placements:"appeared"
    },
    {
        company_id:"C5",
        company_name:"Adobe",
        arrival_date:"10-12-2020",
        placements:"appeared"
    },
    {
        company_id:"C6",
        company_name:"TCS",
        arrival_date:"30-10-2020",
        placements:"appeared"
    },
    {
        company_id:"C7",
        company_name:"Wipro",
        arrival_date:"30-10-2020",
        placements:"appeared"
    },
    {
        company_id:"C8",
        company_name:"Mckinsey",
        arrival_date:"20-10-2020",
        placements:"appeared"
    },
    {
        company_id:"C9",
        company_name:"IBM",
        arrival_date:"6-9-2020",
        placements:"not appeared"
    },
    {
        company_id:"C10",
        company_name:"Infosys",
        arrival_date:"16-10-2020",
        placements:"appeared"
    },
]);

db.mentors.insertMany([
    {
        mentor_id:"M301",
        mentor_name:"Ragav Kumar",
        assigned_batch_no:"B29WD",
        no_of_students:25,
        rating:4
        
    },
    {
        mentor_id:"M302",
        mentor_name:"Sai Mohan",
        assigned_batch_no:"B27WD",
        no_of_students:30,
        rating:4
        
    },
    {
        mentor_id:"M303",
        mentor_name:"Mariappan",
        assigned_batch_no:"B20WE",
        no_of_students:15,
        rating:4
        
    },
    {
        mentor_id:"M304",
        mentor_name:"Lavish",
        assigned_batch_no:"C15WD",
        no_of_students:10,
        rating:4
        
    },
    {
        mentor_id:"M305",
        mentor_name:"Rahul",
        assigned_batch_no:"C45WD",
        no_of_students:14,
        rating:4
        
    },
    {
        mentor_id:"M306",
        mentor_name:"Nipun",
        assigned_batch_no:"C30WE",
        no_of_students:40,
        rating:4
        
    },
]);

db.items.insertMany(
[
  {
      id: "1",
      product_name: "Intelligent Fresh Chips",
      product_price: 655.00,
      product_material: "Concrete",
      product_color: "mint green"
  },
  {
      id: "2",
      product_name: "Practical Fresh Sausages",
      product_price: 911.0,
      product_material: "Cotton",
      product_color: "indigo"
  },
  {
      id: "3",
      product_name: "Refined Steel Car",
      product_price: 690.00,
      product_material: "Rubber",
      product_color: "gold"
  },
  {
      id: "4",
      product_name: "Gorgeous Plastic Pants",
      product_price: 492.00,
      product_material: "Soft",
      product_color: "plum"
  },
  {
      id: "5",
      product_name: "Sleek Cotton Chair",
      product_price: 33.00,
      product_material: "Fresh",
      product_color: "black"
  },
  {
      id: "6",
      product_name: "Awesome Wooden Towels",
      product_price: 474.00,
      product_material: "Plastic",
      product_color: "orange"
  },
  {
      id: "7",
      product_name: "Practical Soft Shoes",
      product_price: 500.00,
      product_material: "Rubber",
      product_color: "pink"
  },
  {
      id: "8",
      product_name: "Incredible Steel Hat",
      product_price: 78.00,
      product_material: "Rubber",
      product_color: "violet"
  },
  {
      id: "9",
      product_name: "Awesome Wooden Ball",
      product_price: 28.00,
      product_material: "Soft",
      product_color: "azure"
  },
  {
      id: "10",
      product_name: "Generic Wooden Pizza",
      product_price: 84.00,
      product_material: "Frozen",
      product_color: "indigo"
  },
  {
      id: "11",
      product_name: "Unbranded Wooden Cheese",
      product_price:26.00,
      product_material: "Soft",
      product_color: "black"
  },
  {
      id: "12",
      product_name: "Unbranded Plastic Salad",
      product_price: 89.00,
      product_material: "Wooden",
      product_color: "pink"
  },
  {
      id: "13",
      product_name: "Gorgeous Cotton Keyboard",
      product_price: 37.00,
      product_material: "Concrete",
      product_color: "sky blue"
  },
  {
      id: "14",
      product_name: "Incredible Steel Shirt",
      product_price: 54.00,
      product_material: "Metal",
      product_color: "white"
  },
  {
      id: "15",
      product_name: "Ergonomic Cotton Hat",
      product_price: 43.00,
      product_material: "Rubber",
      product_color: "mint green"
  },
  {
      id: "16",
      product_name: "Small Soft Chair",
      product_price: 47.00,
      product_material: "Cotton",
      product_color: "teal"
  },
  {
      id: "17",
      product_name: "Incredible Metal Car",
      product_price:36.00,
      product_material: "Fresh",
      product_color: "indigo"
  },
  {
      id: "18",
      product_name: "Licensed Plastic Bacon",
      product_price:88.00,
      product_material: "Steel",
      product_color: "yellow"
  },
  {
      id: "19",
      product_name: "Intelligent Cotton Chips",
      product_price: 46.00,
      product_material: "Soft",
      product_color: "azure"
  },
  {
      id: "20",
      product_name: "Handcrafted Wooden Bacon",
      product_price: 36.00,
      product_material: "Concrete",
      product_color: "lime"
  },
  {
      id: "21",
      product_name: "Unbranded Granite Chicken",
      product_price: 90.00,
      product_material: "Metal",
      product_color: "gold"
  },
  {
      id: "22",
      product_name: "Ergonomic Soft Hat",
      product_price: 99.00,
      product_material: "Rubber",
      product_color: "black"
  },
  {
      id: "23",
      product_name: "Intelligent Steel Pizza",
      product_price: 95.00,
      product_material: "Cotton",
      product_color: "azure"
  },
  {
      id: "24",
      product_name: "Tasty Rubber Cheese",
      product_price:47.00,
      product_material: "Frozen",
      product_color: "orchid"
  },
  {
      id: "25",
      product_name: "Licensed Steel Car",
      product_price:20.00,
      product_material: "Cotton",
      product_color: "indigo"
  }
]
);
//product queries
db.items.find({}).pretty();
db.items.find({$and:[{"product_price":{$gte:400,$lte:800}}]});
db.items.find({"product_price":{$gt:500}}).limit(4);
db.items.find({"id":"10"});
db.items.find({"product_material":"Soft"});
db.items.find({$and:[{"product_color":"indigo"},{"product_price":492}]});
db.items.find({},{"product_name":1,"product_material":1}).pretty();
db.items.find({},{"product_name":1,"product_material":1,_id:0}).pretty();
db.items.aggregate([
       { "$group": {
          "_id": "$product_price",
          "Counter": { "$sum": 1 }
      }},
      { "$match": {
          "Counter": { "$gt": 1 }
    }}
 ]).pretty();

//zenclass queries
db.company_drives.find({
  $and:[{"arrival_date":{$gte:"15-10-2020",$lte:"31-10-2020"}}]
});


db.mentors.find({
  no_of_students :{$gt:15}
});


db.users.find({},{codekata_problems_solved:1,user_name:1});
db.users.find({"placements":"appeared"});
db.company_drives.find({"placements":"appeared"});
db.topics.find({$and:[{"session_date":{$gte:"1-10-2020",$lte:"30-10-2020"}}]})
db.tasks.find({$and:[{"task_date":{$gte:"1-10-2020",$lte:"30-10-2020"}}]})
db.attendance.find({"students_attended_class":{$in:[1,2,3,4,5]}});
db.tasks.find({"task_submitted_user":{$in:[1,2,3,4,5]}})
