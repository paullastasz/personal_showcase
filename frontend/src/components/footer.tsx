import { Trans, useTranslation } from "react-i18next";

function Footer() {
  // @ts-ignore
  const { t, i18n } = useTranslation();

  return (
<footer className="w-full bg-white text-black">
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8 min-[375px]:px-5 sm:gap-y-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-24">
    <h3 className="header-3 text-center">
      {t("more")}
    </h3>

    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
      <div className="footer-text text-justify min-w-0 break-words [overflow-wrap:anywhere]">
        <h4 className="header-4 text-center">{t("source")}</h4>
        <Trans
          i18nKey="copyright_description"
          components={[
            <a
              href="https://github.com/paullastasz/personal_showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:underline"
            />,
          ]}
        />
      </div>

      <div className="min-w-0 break-words [overflow-wrap:anywhere]">
        <h4 className="header-4 text-center">{t("privacy_notice")}</h4>
        <p className="footer-text text-justify">{t("privacy_notice_details")}</p>
      </div>
    </div>
  </div>

  <div className="flex flex-col copy-rights-text ml-[10vw] mr-[10vw]">
     <div aria-hidden="true" className='h-[0.5px] w-full bg-black/20'></div>

    <p className="my-4 px-3 sm:my-5 sm:px-6 text-center">
      <time dateTime="2026">2026</time> &copy; Paulina Staszewska. {t("copyright_rule")}
    </p>
  </div>
</footer>
  )
}

export default Footer