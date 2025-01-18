import GridPage from "../components/grid";
import ProductComponent from "../components/product";

const HomePage = () => {

    const products = [
        {
            sale: true,
            hot: true,
            imageUrl: "https://phucanhcdn.com/media/product/250_54922_laptop_dell_inspiron_3520_n5i5052w1_thumb.jpg",
            title: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
            list_price: "500000",
            price: "400000",
            tag: true,
        },
        {
            sale: false,
            hot: false,
            imageUrl: "https://phucanhcdn.com/media/product/250_54922_laptop_dell_inspiron_3520_n5i5052w1_thumb.jpg",
            title: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
            list_price: "500000",
            price: "400000",
            tag: true,
        },
        {
            sale: true,
            hot: false,
            imageUrl: "https://phucanhcdn.com/media/product/250_54922_laptop_dell_inspiron_3520_n5i5052w1_thumb.jpg",
            title: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
            list_price: "500000",
            price: "400000",
            tag: true,
        },
        {
            sale: true,
            hot: true,
            imageUrl: "https://phucanhcdn.com/media/product/250_54922_laptop_dell_inspiron_3520_n5i5052w1_thumb.jpg",
            title: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
            list_price: "500000",
            price: "400000",
            tag: true,
        },
    ];

    return (
        <>
            <GridPage columns={4}>
                {products.map((product, index) => (
                    <ProductComponent
                        key={index}
                        tag={product.tag}
                        hot={product.hot}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        list_price={product.list_price}
                        price={product.price}
                        sale={product.sale}
                    />
                ))}
            </GridPage>
        </>
    );
}

export default HomePage;
