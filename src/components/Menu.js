import Link from "next/link";
import { withRouter,useRouter } from "next/router";
import { BsBookHalf, BsUiRadios,BsFillMenuButtonWideFill } from 'react-icons/bs';
import { HiOutlineSwatch } from 'react-icons/hi2';

const SectionLink = withRouter(
  ({ router, href, children, selected = false, className = "" }) => (
    <Link href={href}
      className={
        `no-underline block font-semibold p-1 ${className}`}>
        {children}
    </Link>
  )
);

function SubsectionLink({ href, children, selected = false }) {
  const router = useRouter()
  return (
  <SectionLink href={href} selected={selected} className={`text-sm
  ${selected || router.pathname === href
          ? "border rounded-lg font-semibold bg-purple-200 w-auto inline-block"
          : "hover:bg-purple-200 rounded-lg !font-normal w-auto inline-block"} `}>
    {children}
  </SectionLink>)
}

export default ({ className }) => (
  <div
    className={className}
    style={{ flexBasis: 320, height: "calc(100vh - 4rem)", top: "4rem" }}
  >
    <div className="p-4">
      <input
        className="rounded border px-3 py-2 w-full"
        type="text"
        placeholder="Search..."
      />
    </div>

    <div className="overflow-y-scroll h-full border-t pl-6 py-2 whitespace-nowrap">
      <SectionLink href="/"><BsBookHalf className='inline text-violet-600' /> Getting Started</SectionLink>
      <SectionLink href="/"><HiOutlineSwatch className='inline text-pink-500' /> Content</SectionLink>
      <SectionLink href="/"><BsUiRadios className='inline text-blue-500' /> Forms</SectionLink>
      <SectionLink href="/" selected={true}>
        <BsFillMenuButtonWideFill className="inline text-cyan-400" /> Components
      </SectionLink>
      <div className="pl-6">
      <ul className="list-reset">
        <li>
          <SubsectionLink href="/accordion">Accordion</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/alerts">Alerts</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/badge">Badge</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/breadcrumb">Breadcrumb</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/buttons">Buttons</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/button group">Button group</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/card">Card</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/carousel">Carousel</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/collapse">Collapse</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/dropdowns">Dropdowns</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/forms">Forms</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/inputGroup">Input group</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/jumbotron">Jumbotron</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/listGroup">List group</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/modal">Modal</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/navs">Navs</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/navbar">Navbar</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/pagination">Pagination</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/popovers">Popovers</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/progress">Progress</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/scrollspy">Scrollspy</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/tooltips">Tooltips</SubsectionLink>
        </li>
      </ul>
      </div>
    </div>
  </div>
);
