import { Header, Footer, Nav } from "./index";

export const Layout = ({ content, isLoggedIn }) => `
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${Header()}
        ${Nav({ isLoggedIn })}
        <main class="p-4">
          ${content}
        </main>
        ${Footer()}
      </div>
    </div>
`;

export default Layout;
