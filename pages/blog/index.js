import PathDisplay from "@/components/PathDisplay"
import Header from "../../components/Header"
import Footer from "@/components/Footer"
import BlogCard from "@/components/blog/BlogCard"
import FilterCard from "@/components/blog/FilterCard"
import { useState } from "react"
import Head from "next/head"

function Blog(){

    const tags = ["Education", "Security", "Infrastructure"]

    const [currentFilter, setCurrentFilter] = useState("None")

    function handleFilter(tag){
        if(currentFilter == tag || tag == "showAll"){
            setCurrentFilter("None")
        }
        else{
            setCurrentFilter(tag)
        }
    }

    const blogs = [
        {
        title: "The Benefits of Cloud Hosted Development in 2023",
        description: "Let 2023 become the year in which your business takes on a new level. In this article we explore why cloud hosted development is a must-have for any IT business to keep up with the competition.",
        img: "/images/blog-1.png",
        authorName: "Bonnie Green",
        authorTitle: "Marketing Advisor",
        authorPicture: "/images/ai-face-1.jpg",
        tag: "Education",
        slug: "cloud-computing-essential"
        },
        {
        title: "Implementing a New State-of-the-Art Security System Across Our Platform",
        description: "CloudByte is implementing a industry leading security system across it's entire platform. Find out the basics of how one of the worlds best security systems works.",
        img: "/images/blog-2.jpeg",
        authorName: "Ivan Horvat",
        authorTitle: "Information Security Analyst",
        authorPicture: "/images/ai-face-2.jpg",
        tag: "Security",
        slug: "new-security-system"
        },
        {
        title: "New CloudByte Server Built in Germany",
        description: "As one of the worlds largest PaaS providers we need servers across the world. With the European market growing at a very fast rate, we've built a new server in Germany to provide even more bandwith to our European clients.",
        img: "/images/blog-3.avif",
        authorName: "Sara Kovač",
        authorTitle: "PR Manager",
        authorPicture: "/images/ai-face-3.webp",
        tag: "Infrastructure",
        slug: "new-server-built"
        },
    ]


    return (
        <>
        <Head>
            <title>Blog</title>
        </Head>
        <div className="h-fill bg-light">
            <Header theme={"light"} page={"blog"}/>
            <PathDisplay title={"blog"} theme={"light"} subpage={"none"}/>
            <div className="lg:hidden">
                <FilterCard current={currentFilter} handleFilter={handleFilter} />
            </div>
            <div className="flex justify-between">
            <div className="mb-32">
                {currentFilter === "None" ? 
                blogs.map(blog => (
                    <BlogCard key={blog.title} title={blog.title} description={blog.description} image={blog.img} authorName={blog.authorName} authorPicture={blog.authorPicture} authorTitle={blog.authorTitle} tag={blog.tag} slug={blog.slug}/>
                ))
                :
                blogs.filter(blog => blog.tag == currentFilter).map(blog => (
                    <BlogCard key={blog.title} title={blog.title} description={blog.description} image={blog.img} authorName={blog.authorName} authorPicture={blog.authorPicture} authorTitle={blog.authorTitle} tag={blog.tag} slug={blog.slug}/>
                ))
            }
            </div>
                <div className="hidden lg:block">
                    <FilterCard current={currentFilter} handleFilter={handleFilter} />
                </div>
            </div>
            <Footer theme={"light"} />
        </div>
        </>
    )
}

export default Blog