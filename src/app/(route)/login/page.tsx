import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import LoginContainer from '@/app/components/login/LoginContainer'

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header />
      <div className="w-[1440px] mx-auto mb-10">
        <LoginContainer />
      </div>
      <Footer />
    </section>
  )
}
