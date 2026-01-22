export const MENU_ITEMS = [
    {
        id: '1',
        name: 'Truffle Mushroom Burger',
        description: 'Wagyu beef patty, truffle mayo, caramelized onions, swiss cheese.',
        price: 18.90,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        tags: ['Best Seller'],
        bestseller: true,
    },
    {
        id: '2',
        name: 'Spicy Salmon Poke Bowl',
        description: 'Fresh salmon, avocado, cucumber, edamame, spicy mayo on sushi rice.',
        price: 16.50,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        tags: ['New', 'Healthy'],
        bestseller: true,
    },
    {
        id: '3',
        name: 'Matcha Lava Cake',
        description: 'Warm matcha cake with a molten center, served with vanilla bean ice cream.',
        price: 12.00,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=600&q=80',
        tags: ['Vegetarian'],
        bestseller: true,
    },
    {
        id: '4',
        name: 'Yuzu Sparkling Refresher',
        description: 'Fresh yuzu juice, sparkling water, mint leaves, honey.',
        price: 6.50,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        tags: ['Refreshing'],
        bestseller: false,
    },
    {
        id: '5',
        name: 'Classic Carbonara',
        description: 'Spaghetti, guanciale, egg yolk, pecorino cheese, black pepper.',
        price: 17.90,
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80',
        tags: [],
        bestseller: false,
    }
];

export const PROMOTIONS = [
    {
        id: 'promo1',
        title: 'Happy Hour Special',
        description: '50% off all cocktails from 5PM - 8PM daily.',
        validity: 'Daily 5PM - 8PM',
        code: 'HAPPY50',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'promo2',
        title: 'Lunch Set Deal',
        description: 'Main course + Drink + Soup for only $15.',
        validity: 'Mon-Fri 11AM - 2PM',
        code: 'LUNCH15',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80'
    }
];

export const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1550966871-3ed3c6227685?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
];

export const TEAM_MEMBERS = [
    {
        name: 'Sarah Jenkins',
        role: 'Founder & Owner',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Marcus Chen',
        role: 'Head Chef',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Restaurant Manager',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    }
];
