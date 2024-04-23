import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import OnBoardContainer from '@/app/components/signup/containers/OnBoardContainer'

export default function OnBoardPage() {

  return (
    <section className="flex flex-col items-center min-h-screen">
      <Header/>
      <div className="w-[1440px] mx-auto">
        <OnBoardContainer />
      </div>
      <Footer />
    </section>
  )
}
