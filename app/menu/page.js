import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import StatisticsSection from '../../components/home/StatisticsSection';
import MenuSection from "../../components/menu/MenuSection";
import BottomLogo from "../../components/menu/BottomLogo";

export default function Menu() {
  const starterMenu = {
    heading: "Starter Menu",
    image: "/img/menu/menu1.png",
    menuItems: [
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        calories: "560 CAL",
        price: "32$",
      },
      {
        name: "Berries and creme tart",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: "700 CAL",
        price: "43$",
      },
      {
        name: "Tormentoso Bush Pizza Pintoage",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: "1000 CAL",
        price: "14$",
      },
      {
        name: "Spicy Vegan Potato Curry",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: "550 CAL",
        price: "35$",
      },
    ],
  };

  const mainCourse = {
    heading: "Main Course",
    image: "/img/menu/menu2.png",
    menuItems: [
      {
        name: "Optic Big Breakfast Combo Menu",
        description: "Toasted French bread topped with romano, cheddar",
        calories: "560 CAL",
        price: "32$",
      },
      {
        name: "Cashew Chicken With Stir-Fry",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: "700 CAL",
        price: "43$",
      },
      {
        name: "Vegetables & Green Salad",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: "1000 CAL",
        price: "14$",
      },
      {
        name: "Spicy Vegan Potato Curry",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: "550 CAL",
        price: "35$",
      },
    ],
  };
  const dessertMenu = {
    heading: "Dessert",
    image: "/img/menu/menu3.png", // Replace with the actual image path
    menuItems: [
      {
        name: "Fig and lemon cake",
        description: "Toasted French bread topped with romano, cheddar",
        calories: "560 CAL",
        price: "32$",
      },
      {
        name: "Creamy mascarpone cake",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        calories: "700 CAL",
        price: "43$",
      },
      {
        name: "Pastry, blueberries, lemon juice",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: "1000 CAL",
        price: "14$",
      },
      {
        name: "Prix au chocolat",
        description: "Spreadable cream cheese, crumbled blue cheese",
        calories: "550 CAL",
        price: "35$",
      },
    ],
  };
  
  const drinksMenu = {
    heading: "Drinks",
    image: "/img/menu/menu4.png", // Replace with the actual image path
    menuItems: [
      {
        name: "Caffe macchiato",
        description: "Ground espresso and steamed milk",
        calories: "50 CAL",
        price: "12$",
      },
      {
        name: "Aperol Spritz Cappuccino",
        description: "Orange liqueur, soda, and prosecco",
        calories: "150 CAL",
        price: "16$",
      },
      {
        name: "Caffe Latte Coconut",
        description: "Espresso and coconut milk",
        calories: "120 CAL",
        price: "14$",
      },
      {
        name: "Tormentoso Bush Pinotage",
        description: "Ground cumin, avocado, peeled and cubed",
        calories: "100 CAL",
        price: "18$",
      },
    ],
  };
  
  return (
    <>
      <InnerHeader />
      <InnerPageBanner  heading="Our Menu" breadcrumb="Menu" />
      <MenuSection {...starterMenu} />
      <MenuSection {...mainCourse} reverse={true} />
      <StatisticsSection />
      <MenuSection {...dessertMenu} />
      <MenuSection {...drinksMenu} reverse={true} />
      <BottomLogo/>
      <Footer />
    </>
  );
}
