import Link from "next/link";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  return (
    <div className="group relative">
      <Link href={{ pathname, query }} as={asPath} locale={activeLocale}>
        <a>
          <div className="flex place-items-center uppercase ">
            <span>{activeLocale}</span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
        </a>
      </Link>
      <ul className="absolute right-0 hidden origin-top-right -translate-x-2 flex-col justify-start bg-white py-2 shadow group-hover:flex">
        {locales.map((locale) => {
          return (
            <li
              className={`my-1 px-2 ${
                locale === activeLocale && "bg-gray-light"
              }  hover:bg-gray-light`}
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
