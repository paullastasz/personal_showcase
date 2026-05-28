import { Trans, useTranslation } from "react-i18next";

function Footer() {
  // @ts-ignore
  const { t, i18n } = useTranslation();

  return (
    <footer className='w-full h-full bg-white text-black items-center text-center'>
      <div className='ml-10 mr-15 p-15 flex flex-col gap-y-10'>
      <h3 className='text-[4rem] lg:text-9xl babylonica-r text-shadow-xs/70'>{t("source")}</h3>
        <p className='text-sm lg:text-lg font-light'>
          <Trans  i18nKey="copyright_description"
                  components={[ <a href="https://github.com/paullastasz/personal_showcase" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="no-underline hover:underline" /> ]} />
        </p>
      </div>
      <div className='flex flex-col text-sm lg:text-lg ml-10 mr-10'>
        <div className='h-[1px] w-full font-light  bg-black'></div>
        <p className='mt-5 mb-5'>2026 &copy; Paulina Staszewska. {t("copyright_rule")}</p>
      </div>
    </footer>
  )
}

export default Footer