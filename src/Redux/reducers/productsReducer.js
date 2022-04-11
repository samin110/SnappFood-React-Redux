import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/actionProducts/actionTypeProducts";

const initialState = {
  loading: false,
  products: [
    // {
    //   _id: "6243312b82e417324dfdcbe4",
    //   name: "ماکارونی",
    //   description: "سویا، سیب زمینی، سس کچاپ",
    //   image: "assets/images/foods/food1.png",
    //   price: "80 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "624331aa82e417324dfdcbe6",
    //   name: "صبحانه خوشمزه",
    //   description: "کره، مربا، حلوای شکری، خامه، تخم مرغ",
    //   image: "assets/images/foods/food3.png",
    //   price: "50 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "624331e382e417324dfdcbe8",
    //   name: "میگو سوخاری",
    //   description: "سس کچاپ، نان تازه",
    //   image: "assets/images/foods/food4.png",
    //   price: "138 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243322582e417324dfdcbea",
    //   name: "ماهی قزل آلا",
    //   description: "فلفل قرمز، سبزیجات، ماست، کلم بروکلی",
    //   image: "assets/images/foods/food5.png",
    //   price: "98 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243326a82e417324dfdcbec",
    //   name: "صبحانه",
    //   description: "خیار، گوجه فرنگی، تخم مرغ",
    //   image: "assets/images/foods/food6.png",
    //   price: "37 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243329282e417324dfdcbee",
    //   name: "صبحانه",
    //   description: "تخم مرغ، سبزیجات تازه",
    //   image: "assets/images/foods/food7.png",
    //   price: "65 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "624332c382e417324dfdcbf0",
    //   name: "صبحانه",
    //   description: "تخم مرغ، گوجه فرنگی",
    //   image: "assets/images/foods/food9.png",
    //   price: "25 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "624332ec82e417324dfdcbf2",
    //   name: "کباب برگ",
    //   description: "برنج، سبزیجات، ماست",
    //   image: "assets/images/foods/food10.png",
    //   price: "100 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243331a82e417324dfdcbf4",
    //   name: "جوجه کباب",
    //   description: "سیب زمینی، سبزیجات",
    //   image: "assets/images/foods/food12.png",
    //   price: "97 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243333382e417324dfdcbf6",
    //   name: "سوشی",
    //   description: "سبزیجات",
    //   image: "assets/images/foods/food13.png",
    //   price: "155 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243336482e417324dfdcbf8",
    //   name: "ماکارونی",
    //   description: "سویا، سیب زمینی، سس کچاپ",
    //   image: "assets/images/foods/food1.png",
    //   price: "80 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "624333a282e417324dfdcbfa",
    //   name: "پیتزا پپرونی",
    //   description: "سس تند و کچاپ",
    //   image: "assets/images/foods/food8.png",
    //   price: "75 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "624333df82e417324dfdcbfc",
    //   name: "ساندویچ",
    //   description: "مرغ، سس کچاپ، سبزیجات",
    //   image: "assets/images/foods/food14.png",
    //   price: "100 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243340082e417324dfdcbfe",
    //   name: "ساندویچ کالباس",
    //   description: "سس کچاپ",
    //   image: "assets/images/foods/food15.png",
    //   price: "45 هزار تومان",
    //   __v: 0,
    // },
    // {
    //   _id: "6243341d82e417324dfdcc00",
    //   name: "کباب لقمه",
    //   description: "سیب زمینی، سبزیجات",
    //   image: "assets/images/foods/food16.png",
    //   price: "130 هزار تومان",
    //   __v: 0,
    // },
  ],
  error: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { error: "", products: action.payload, loading: false };
    case FETCH_PRODUCTS_FAILURE:
      return { error: action.payload, products: [], loading: false };
    default:
      return state;
  }
};

export default productsReducer;
