import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const Create = () => {
  const { data, setData, post, errors } = useForm<FormData>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('user.store'));
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Create new User
        </h2>
      }
    >
      <Head title="Create new User" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8"
            >
              <div className="mt-4">
                <InputLabel htmlFor="user_name" value="Username" />
                <TextInput
                  id="user_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused
                  onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="user_email" value="Email" />
                <TextInput
                  id="user_email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('email', e.target.value)}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="user_password" value="Password" />
                <TextInput
                  id="user_password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('password', e.target.value)}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="user_password_confirmation"
                  value="Confirm Password"
                />
                <TextInput
                  id="user_password_confirmation"
                  type="password"
                  name="passwordConfirmation"
                  value={data.passwordConfirmation}
                  className="mt-1 block w-full"
                  onChange={(e) =>
                    setData('passwordConfirmation', e.target.value)
                  }
                />
                <InputError
                  message={errors.passwordConfirmation}
                  className="mt-2"
                />
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={route('user.index')}
                  className="round mr-2 inline-block rounded bg-gray-100 px-3 py-1 text-sm text-gray-800 shadow transition-all hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <button className="rounded bg-emerald-500 px-3 py-1 text-sm text-white shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;
