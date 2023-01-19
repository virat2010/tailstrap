import { H1, Subheading, H2 } from "../components/Elements";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head><title>Get started with Tailstrap</title></Head>
      <H1>Get started with Tailstrap</H1>
      <Subheading>Tailstrap is a bootstrap to tailwind toolkit. Build anything-from bootstrap to tailwind-in seconds.</Subheading>
      
      <p>This is a long gone project and just a side-project started by Christian Genco and Virat R. Ponugoti. If you really want to take this seriously then either make a PR at the github page or if you are just a user go check out <a href="https://mdbootstrap.com/">MDBootstrap</a> or <a href="https://flowbite.com">Flowbite</a>. <br></br>They got serious with bootstrap and they also built it in tailwind. This project has versatality as there are no pre-built components. By the way, thank you for checking out this project.</p>    
    
    </div>)
}
export default index