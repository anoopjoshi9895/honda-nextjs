import Header from "./header";
import Footer from "../components/footer";

const Layout = (props: { children: any, footerData: any }) => {
    const {
        connectWithUs,
        extraLinks,
        menuItems,
        serviceLinks,
        socialMedia,
        copyRight,
        title,
    } = props.footerData;

    return (
        <div className='layout'>
            <Header />
            {props.children}
            <Footer
                connectWithUs={connectWithUs}
                extraLinks={extraLinks}
                menuItems={menuItems}
                serviceLinks={serviceLinks}
                socialMedia={socialMedia}
                copyRight={copyRight}
                title={title}
            />
        </div>
    );
};
export default Layout;
