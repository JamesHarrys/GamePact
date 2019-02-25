export const Configuration = {
    header: {
        heading: 'AN ANGULAR PROJECT',
        headingtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        buttontext: 'START CREATING TODAY',
        buttonlink: '\home'
    },
    intro: {
        tagline: 'SUCCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [
            {icon: 'html5', title: 'HTML5 & CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'},
            {icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'},
            {icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
            {icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'}
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'A perilous adventure for avid players',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        feedback: [
            {name: 'John Doe', userimage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'Happy Company'},
            {name: 'Roslyn Bach', userimage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'Mellowtron'},
            {name: 'Thomas Danis', userimage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'Jarlsberg Inc.'}
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            {name: 'South Africa', weblink: '001-africa.png', logo: '001-africa.png'},
            {name: 'Mask', weblink: '002-mask.png', logo: '002-mask.png'},
            {name: 'BBQ', weblink: '003-barbecue.png', logo: '003-barbecue.png'},
            {name: 'Vulture', weblink: '004-vulture.png', logo: '004-vulture.png'},
            {name: 'Campfire', weblink: '006-campfire.png', logo: '006-campfire.png'},
            {name: 'Camera', weblink: '005-camera.png', logo: '005-camera.png'},
            {name: 'Compass', weblink: '007-compass.png', logo: '007-compass.png'},
            {name: 'Canteen', weblink: '008-canteen.png', logo: '008-canteen.png'},
            {name: 'Tent', weblink: '009-tent.png', logo: '009-tent.png'}
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plan: [
            {title: 'Personal', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '5.99', currency: '€',
                    downloads: '5 Downloads', 
                    extensions: '2 Extensions', 
                    tutorials: 'Tutorials', 
                    support: 'Forum Support', 
                    updates: '1 year free updates'
                ,
                buttontext: 'BUY TODAY', buttonlink: '#', featured: false
            },
            {title: 'Student', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '8.99', currency: '€', 
                    downloads: '25 Downloads', 
                    extensions: '5 Extensions', 
                    tutorials: 'Tutorials + Files', 
                    support: 'Forum Support', 
                    updates: '2 year free updates'
                ,                
                buttontext: 'BUY TODAY', buttonlink: '#', featured: true
            },
            {title: 'Business', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '15.99', currency: '€',
                    downloads: 'Unlimited Downloads', 
                    extensions: 'Unlimited Extensions', 
                    tutorials: 'HD Video Tutorials', 
                    support: 'Chat Support', 
                    updates: 'Lifetime free updates'
                ,                 
                buttontext: 'BUY TODAY', buttonlink: '#', featured: false
            },
        ]
    },
    footer: {
        copyrightText: 'Made by',
        developer: 'James Harrys',
        developperLink: 'www.jamesharrys.com'
    },
    social: [
        {link: 'https://www.facebook.com', title: 'Facebook', target: '_blank', username: 'jamesharrys', icon: 'fa-facebook'},
        {link: 'https://www.google.com/+', title: 'Google+', target: '_blank', username: 'jamesharrys', icon: 'fa-google-plus'},
        {link: 'https://www.twitter.com', title: 'Twitter', target: '_blank', username: 'jamesharrys', icon: 'fa-twitter'},
        {link: 'https://www.instagram.com', title: 'Instagram', target: '_blank', username: 'jamesharrys', icon: 'fa-instagram'},
        {link: 'https://www.behance.com', title: 'Behance', target: '_blank', username: 'jamesharrys', icon: 'fa-behance'}
    ]
    
}