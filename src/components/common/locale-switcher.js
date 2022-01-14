import Link from "next/link";
import { useRouter } from "next/router";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <>
      <ul className="flex flex-row">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          console.log("Pathname: ", pathname);
          console.log("Query: ", query);
          console.log("Pathname, query", { pathname, query });

          return (
            <li className="mr-4 last:mr-0" key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>{locale.toUpperCase()}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LocaleSwitcher;
