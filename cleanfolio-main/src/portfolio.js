const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aleemuddin.netlify.app/',
  title: '</AM>',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aleemuddin Mohammad',
  role: ' Backend Development  |  DevOps  & Cloud ',
  description:
    "",
  resume: 'https://drive.google.com/file/d/1TwuHTZQQ5pyZ3W9-huQaQwslSYSRKG7_/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/alleem18/',
    github: 'https://github.com/alleem18',
  },

}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Django Blog API',
    description:
      'Developed a RESTful API using Django, implementing user registration and JWT-based authentication. Integrated full CRUD functionality (create, read, update, delete) for blog posts, with endpoint filtering and search features.',
    stack: ['Django REST Framework', 'SQLite', 'JWT Authentication', 'Postman', 'Git'],
    sourceCode: 'https://github.com/alleem18/django-blog-API',
    livePreview: 'https://github.com/alleem18/django-blog-API',
  },
  {
    name: 'Weather API Wrapper Service',
    description:
      'Developed a Node.js/Express microservice to fetch and process real-time weather data from the Visual Crossing API, seamlessly integrating with a React.js frontend. Leveraged Redis caching to reduce external API requestFormReset.',
    stack: ['Node.js', 'Express', 'React.js', 'Redis', 'Axios', 'Docker', 'Visual Crossing API', 'Git'],
    sourceCode: 'https://github.com/alleem18/Weather_API_Wrapper',
    livePreview: 'https://github.com/alleem18/Weather_API_Wrapper',
  },
  {
    name: 'Custom HTTP Server',
    description:
      'Built an HTTP server from scratch in GO, handling GET/POST requests, serving files, and managing multiple concurrent connections via TCP sockets, Implemented HTTP compression, request parsing, and advanced features (e.g., HTTP headers, verbs, and body extraction), demonstrating deep understanding of network protocols and server',
    stack: ['HTTP', 'GO'],
    sourceCode: 'https://github.com/alleem18',
    
  },
 
  {
    name: 'Graduate School Prediction - IEEE Journal',
    description:
      'Advanced predictive modelling for academic admission decisions. Utilized Support Vector Machines (SVM), Logistic Regression, and Gaussian Naive Bayes algorithms, enhancing accuracy to 95%. Conducted extensive dataset analysis, feature engineering, and hyperparameter tuning.Highlighted strong analytical and predictive modelling skills.',
    stack: ['Jupyter Notebook', 'Pandas & Numpy', 'scikit-learn', 'Matplot/Seaborn', 'Hyperparameter'],
    livePreview: 'https://ieeexplore.ieee.org/document/10126307',
  },


]

const skills = [
  {
    category: "Langauges",
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'GoLang', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' }
    ]
  },
  // Additional categories...
  {
    category: "Web Development",
    skills: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg' },
      { name: 'API', logo: 'https://img.icons8.com/carbon-copy/100/22C3E6/api.png' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'gRPC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-plain.svg' },
      { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'},
      
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
      { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg'},
    ]
  },

  {
    category: "Tools & Frameworks",
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'},
      { name: 'Graphana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg' },
      
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Pycharm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg'},
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'},
      { name: 'RedHat', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg'},
      { name: 'Ubuntu', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg'},
      { name: 'Vim', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg'},
      
      { name: 'ChatGPT', logo: 'https://img.icons8.com/fluency/96/chatgpt--v2.png'}
    ]
  }

];


const education = [
  {
    id: 'edu-001',
    school: 'The University of Texas at Arlington - Arlington, TX',
    degree: 'MS in Computer Science',
    year: 'Aug 2023 - May 2025',
    GPA: '3.9/4',
    details: '-> Design and Analysis of Algorithms, Cloud Computing, Distributed Systems, Data Mining, Advanced Software Engineering and Management, Computer Vision,  Machine Learning '
  },
  {
    id: 'edu-002',
    school: 'Sreenidhi Institute of Science and Technology - Hyderabad, India',
    degree: 'B.Tech in Computer Engineering',
    year: 'Aug 2019 - May 2023',
    GPA: '3.67/4',
    details: '-> Machine Learning, AI and Deep Learning,  Computer Organization and Operating Systems, Data Communications and Computer Networks, Web Technologies, and CyberSecurity. '
  },
  // Ensure all entries have a unique 'id'
];

const experience = [
  
  {
    id: 'exp-002',
    school: '@ Arrive Delivery ',
    degree: 'Software Engineer Intern',
    year: 'Jan 2023 – July 2023',
    details: [
      { id: 'd1', text: '-> Assisted in designing and implementing RESTful APIs using Django and Python, enhancing application scalability and performance, and enabling seamless frontend integration with ReactJS.'},
      { id: 'd2', text: '+ Contributed to the development and maintenance of backend services, utilizing MongoDB for data management and implementing robust data retrieval techniques that improved system responsiveness.' },
      { id: 'd3', text: '+ Supported the deployment of containerized applications using Docker and GCP, facilitating consistent environments and streamlined deployments through Jenkins-driven CI/CD pipelines, reducing deployment times by 30%' }
    ]
    
  },
  {
    id: 'exp-001',
    school: '@ All India Council for Technical Education',
    degree: 'AWS Cloud Intern',
    year: 'Jan 2021 – July 2021',
    details: [
      { id: 'd1', text: '-> Designed & deployed scalable AWS cloud architectures and data analytics pipelines, improving system uptime by 15%.'},
      { id: 'd2', text: '+ Implemented real-time analytics dashboards using AWS Kinesis and QuickSight, leading to immediate insights that enhanced decision-making.' },
      { id: 'd3', text: '+ Utilized AWS SageMaker and Lambda to automate processes and apply machine learning models, achieving up to 85% prediction accuracy and reducing data processing time by 50%.' }
    ]
    
  },

  {
    id: 'exp-003',
    school: '@ excited and thrilled to start my career in the software industry',
    degree: "I'm looking a for an entry level software engineer role",
    year: 'Seeking Opportunities - 2024 and Beyond',
    details: [
      
      { id: 'd1', text: '-> Passionate about designing scalable backend systems  to deliver efficient and impactful solutions.' },
      { id: 'd2', text: '+ Skilled in building robust architectures with MongoDB/PostgreSQL and ensuring secure, high-performing data management.' },
      { id: 'd3', text: '+ Eager to leverage cloud platforms (AWS/GCP) and containerized solutions (Docker/Kubernetes) to streamline CI/CD workflows.' },
      { id: 'd4', text: '+ Excited to develop full-stack applications with ReactJS and backend frameworks, delivering intuitive user experiences and scalable systems.' },
      { id: 'd5', text: '+ Looking to grow in dynamic roles where I can enhance skills in distributed systems, microservices, and DevOps practices.' }
    ]
  }
  

  // Ensure all entries have a unique 'id'
];


const certification = [
  {
    title: 'CKA: Certified Kubernetes Administrator',
    id: 'ckad-001',
    issuedBy: 'The Linux Foundation',
    year: '2024',
    image: 'https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png',
    link: 'https://www.credly.com/badges/706359d2-9528-4a1f-94e2-e1ad542e8166/public_url'
  },
  // Add more entries as needed
  {
    title: 'LFCS: Linux Foundation Certified Systems Administrator',
    id: 'ckad-002',
    issuedBy: 'The Linux Foundation',
    year: '2024',
    image: 'https://images.credly.com/size/680x680/images/1e6611ca-8afe-4ecc-ad4d-305fba52ee7e/1_LFCS-600x600.png',
    link: 'https://www.credly.com/badges/8051b8d7-d711-44b0-8047-0fdb553aeeaf/public_url'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    id: 'ckad-003',
    issuedBy: 'AWS training and Certification',
    year: '2022',
    image: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    link: 'https://www.credly.com/badges/238cd3cf-b581-4fff-9d5a-62f1c95a98c7/public_url'
  },
  {
    title: ' AWS Academy Cloud Architecting',
    id: 'ckad-004',
    issuedBy: 'AWS training and Certification',
    year: '2022',
    image: 'https://images.credly.com/size/680x680/images/2f7b0627-48a0-4894-8d46-3245bdfe0463/image.png',
    link: 'https://www.credly.com/earner/earned/badge/408e8294-b462-4973-93d2-2a2921321627'
  },
  {
    title: 'AWS Academy Data Analytics',
    id: 'ckad-005',
    issuedBy: 'AWS training and Certification',
    year: '2022',
    image: 'https://images.credly.com/size/680x680/images/4a489a8c-0b2d-40ee-a839-afa55b44208d/image.png',
    link: 'https://www.credly.com/badges/ccb25b22-aec6-4a70-a77c-b399df23e0ea/public_url'
  },
  {
    title: 'Problem Solving and Python Gold Badge',
    id: 'ckad-006',
    issuedBy: 'Hacker Rank',
    year: '2022',
    image: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
    link: 'https://www.hackerrank.com/profile/2747aleem'
  }

];





const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aleem2747@gmail.com',
}


export { header, about, projects, skills, contact, education, experience, certification };