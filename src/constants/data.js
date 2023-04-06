import images from './images';

const appetizers = [
  {
    title: 'Vegetable Samosa',
    price: '₹ 85',
    tags: 'Crispy fried dumpling stuffed with potato and vegetables',
  },
  {
    title: 'Lamb Samosa',
    price: '₹ 160',
    tags: 'Crispy fried dumpling stuffed with Lamb and vegetables',
  },
  {
    title: 'Chicken Pakora',
    price: '₹ 300',
    tags: 'Chicken chopped and mixed with chickpea batter and fried',
  },
  {
    title: 'Chicken Tikka Kebab',
    price: '₹ 400',
    tags: 'Chicken mixed in Tikka marinate and cooked in Tandoor',
  },
  {
    title: 'Shrimp Poppers',
    price: '₹ 400',
    tags: 'Shrimp mixed in garlic and chickpea batter and fried',
  },
];

const specials = [
  {
    title: 'Butter Chicken',
    price: '₹ 450',
    tags: 'Boneless chicken cooked in mild butter tomato and cashew nut sauce',
  },
  {
    title: "Adraki Gosht Kebab ",
    price: '₹ 500',
    tags: 'Soft Lamb ribs marinated in secret marinate and slow cooked in tandoor',
  },
  {
    title: 'Murg Kaleji',
    price: '₹ 280',
    tags: 'Chicken liver in semi-dry curry tempered with Indian spices',
  },
  {
    title: 'Dum Murg Biryani',
    price: '₹ 400',
    tags: 'Basmati Rice slow cooked in specially cooked Chicken along with Aloo',
  },
  {
    title: 'Nawabi Ghost Biryani',
    price: '₹ 500',
    tags: 'Basmati Rice slow cooked in specially cooked Mutton along with Aloo. A dish for the Nawabs!',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: '2015, 2017, 2018, 2021',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'James Beard Foundation Award',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Best Luxury restaurant of the year.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Sous Chef of the year.',
  },
];

export default { appetizers, specials, awards };
