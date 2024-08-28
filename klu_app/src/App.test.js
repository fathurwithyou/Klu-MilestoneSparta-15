import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomeLogin from './components/userlogin/HomeLogin';
import Test from './components/userlogin/Test';
import Modules from './components/userlogin/Modules';
import Scan from './components/userlogin/Scan';
import Profile from './components/userlogin/Profile';
import ModuleAlfabet1 from './components/userlogin/ModuleAlfabet1';
import ModuleAlfabet2 from './components/userlogin/ModuleAlfabet2';
import ModuleAlfabet3 from './components/userlogin/ModuleAlfabet3';
import ModuleAlfabet4 from './components/userlogin/ModuleAlfabet4';
import ModuleAlfabet5 from './components/userlogin/ModuleAlfabet5';
import ModuleAlfabet6 from './components/userlogin/ModuleAlfabet6';
import ModuleAlfabet7 from './components/userlogin/ModuleAlfabet7';
import ModuleAlfabet8 from './components/userlogin/ModuleAlfabet8';
import ModuleAlfabet9 from './components/userlogin/ModuleAlfabet9';
import ModuleAlfabet10 from './components/userlogin/ModuleAlfabet10';
import ModuleAlfabet11 from './components/userlogin/ModuleAlfabet11';
import ModuleAlfabet12 from './components/userlogin/ModuleAlfabet12';
import ModuleAlfabet13 from './components/userlogin/ModuleAlfabet13';
import ModuleKalimat from './components/userlogin/ModuleKalimat';

jest.mock('./components/Home');
jest.mock('./components/LoginPage');
jest.mock('./components/SignupPage');
jest.mock('./components/userlogin/HomeLogin');
jest.mock('./components/userlogin/Test');
jest.mock('./components/userlogin/Modules');
jest.mock('./components/userlogin/Scan');
jest.mock('./components/userlogin/Profile');
jest.mock('./components/userlogin/ModuleAlfabet1');
jest.mock('./components/userlogin/ModuleAlfabet2');
jest.mock('./components/userlogin/ModuleAlfabet3');
jest.mock('./components/userlogin/ModuleAlfabet4');
jest.mock('./components/userlogin/ModuleAlfabet5');
jest.mock('./components/userlogin/ModuleAlfabet6');
jest.mock('./components/userlogin/ModuleAlfabet7');
jest.mock('./components/userlogin/ModuleAlfabet8');
jest.mock('./components/userlogin/ModuleAlfabet9');
jest.mock('./components/userlogin/ModuleAlfabet10');
jest.mock('./components/userlogin/ModuleAlfabet11');
jest.mock('./components/userlogin/ModuleAlfabet12');
jest.mock('./components/userlogin/ModuleAlfabet13');
jest.mock('./components/userlogin/ModuleKalimat');

describe('App', () => {
  test('renders Home component for / route', () => {
    Home.mockImplementation(() => <div>Home Component</div>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Component')).toBeInTheDocument();
  });

  test('renders LoginPage component for /loginpage route', () => {
    LoginPage.mockImplementation(() => <div>LoginPage Component</div>);
    render(
      <MemoryRouter initialEntries={['/loginpage']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage Component')).toBeInTheDocument();
  });

  test('renders SignupPage component for /signuppage route', () => {
    SignupPage.mockImplementation(() => <div>SignupPage Component</div>);
    render(
      <MemoryRouter initialEntries={['/signuppage']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('SignupPage Component')).toBeInTheDocument();
  });

  test('renders HomeLogin component for /home route', () => {
    HomeLogin.mockImplementation(() => <div>HomeLogin Component</div>);
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('HomeLogin Component')).toBeInTheDocument();
  });

  test('renders Test component for /test route', () => {
    Test.mockImplementation(() => <div>Test Component</div>);
    render(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  test('renders Modules component for /modules route', () => {
    Modules.mockImplementation(() => <div>Modules Component</div>);
    render(
      <MemoryRouter initialEntries={['/modules']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Modules Component')).toBeInTheDocument();
  });

  test('renders Scan component for /scan route', () => {
    Scan.mockImplementation(() => <div>Scan Component</div>);
    render(
      <MemoryRouter initialEntries={['/scan']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Scan Component')).toBeInTheDocument();
  });

  test('renders Profile component for /profile route', () => {
    Profile.mockImplementation(() => <div>Profile Component</div>);
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Profile Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet1 component for /module-alfabet-1 route', () => {
    ModuleAlfabet1.mockImplementation(() => <div>ModuleAlfabet1 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-1']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet1 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet2 component for /module-alfabet-2 route', () => {
    ModuleAlfabet2.mockImplementation(() => <div>ModuleAlfabet2 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-2']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet2 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet3 component for /module-alfabet-3 route', () => {
    ModuleAlfabet3.mockImplementation(() => <div>ModuleAlfabet3 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-3']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet3 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet4 component for /module-alfabet-4 route', () => {
    ModuleAlfabet4.mockImplementation(() => <div>ModuleAlfabet4 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-4']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet4 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet5 component for /module-alfabet-5 route', () => {
    ModuleAlfabet5.mockImplementation(() => <div>ModuleAlfabet5 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-5']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet5 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet6 component for /module-alfabet-6 route', () => {
    ModuleAlfabet6.mockImplementation(() => <div>ModuleAlfabet6 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-6']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet6 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet7 component for /module-alfabet-7 route', () => {
    ModuleAlfabet7.mockImplementation(() => <div>ModuleAlfabet7 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-7']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet7 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet8 component for /module-alfabet-8 route', () => {
    ModuleAlfabet8.mockImplementation(() => <div>ModuleAlfabet8 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-8']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet8 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet9 component for /module-alfabet-9 route', () => {
    ModuleAlfabet9.mockImplementation(() => <div>ModuleAlfabet9 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-9']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet9 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet10 component for /module-alfabet-10 route', () => {
    ModuleAlfabet10.mockImplementation(() => <div>ModuleAlfabet10 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-10']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet10 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet11 component for /module-alfabet-11 route', () => {
    ModuleAlfabet10.mockImplementation(() => <div>ModuleAlfabet11 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-11']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet11 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet12 component for /module-alfabet-12 route', () => {
    ModuleAlfabet12.mockImplementation(() => <div>ModuleAlfabet12 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-12']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet12 Component')).toBeInTheDocument();
  });

  test('renders ModuleAlfabet13 component for /module-alfabet-13 route', () => {
    ModuleAlfabet13.mockImplementation(() => <div>ModuleAlfabet13 Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-alfabet-13']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleAlfabet13 Component')).toBeInTheDocument();
  });

  test('renders ModuleKalimat component for /module-kalimat route', () => {
    ModuleKalimat.mockImplementation(() => <div>ModuleKalimat Component</div>);
    render(
      <MemoryRouter initialEntries={['/module-kalimat']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('ModuleKalimat Component')).toBeInTheDocument();
  });
});