import Head from "next/head";

const Meta = ({title, keywords, description}) => {
    return (<Head>
         <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content={description}/>
    <meta name="author" content="Victor Peter Muthomi"/>
    <meta name="keywords" content={keywords}/>
    <title>School Management System | {title}</title>
    </Head>)
}

Meta.defaultProps = {
    title: "",
    keywords: "school management system with Next Js and Spring Boot",
    description: "school management system with Next Js and Spring Boot"
}
 
export default Meta;