import Link from "next/link";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  return (
    <div className="group relative">
      <Link href={{ pathname, query }} as={asPath} locale={activeLocale}>
        <a className="hidden md:inline-flex">
          <div className="flex place-items-center uppercase ">
            <span>{activeLocale}</span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
        </a>
      </Link>
      <ul className="right-0 flex origin-top-right justify-start py-2 group-hover:flex md:absolute md:hidden md:-translate-x-2 md:flex-col md:bg-white md:shadow">
        {locales.map((locale) => {
          return (
            <li
              className={`px-2 hover:bg-gray-light md:my-1 ${
                locale === activeLocale && "bg-gray-light"
              }`}
              key={locale}
            >
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>
                  <div className="flex place-items-center uppercase ">
                    <span>{locale}</span>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
