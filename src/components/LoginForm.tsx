// LoginForm.tsx
import { useForm } from 'react-hook-form';
import { useLogin } from '../hooks/useAuth';
import { setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { LoginFormInputs } from '../types/User/type';


const LoginForm  = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();
  const {mutate} = useLogin();
  const navigate = useNavigate()

  const onSubmit = (_data: LoginFormInputs) => {
    console.log('로그인 데이터:', _data);
    
    mutate(_data, {
      onSuccess(res) {
        // 로그인 성공 시, 쿠키에 토큰 저장
        if (res && res.token) {
          setCookie(res.token);
          console.log('✅ 로그인 성공, 쿠키에 토큰 저장');
          navigate('/dashboard')
        }
      },
      onError(error) {
        console.error('❌ 로그인 실패', error);
      },
      onSettled() {
        // 성공 여부와 관계없이 처리할 코드
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-4 border rounded-md shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">아이디</label>
        <input
          type="text"
          {...register('loginId', { required: 'id를 입력해주세요.' })}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.loginId && <p className="text-red-500 text-sm mt-1">{errors.loginId.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">비밀번호</label>
        <input
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: { value: 2, message: '비밀번호는 최소 2자 이상이어야 합니다.' },
          })}
          className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
};

export default LoginForm;
