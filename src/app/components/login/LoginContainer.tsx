import Button from '../common/Button'
import Input from '../common/Input'

const LoginContainer = () => {
  return (
    <div>
      <div className="text-6xl font-semibold leading-[90px]">로그인</div>
      <div>
        <Input
          type={'login'}
          onChange={() => console.log('아이디')}
          placeholder="아이디"
        />
        <Input
          type={'login'}
          onChange={() => console.log('비밀번호')}
          placeholder="비밀번호"
        />
      </div>
      <div>
        <Button
          buttonText={'로그인'}
          type={'loginB'}
          isDisabled={false}
          onClickHandler={() => console.log('로그인 로직')}
        />
        <Button
          buttonText={'회원가입'}
          type={'loginW'}
          isDisabled={false}
          onClickHandler={() => console.log('로그인 로직')}
        />
      </div>
    </div>
  )
}

export default LoginContainer
