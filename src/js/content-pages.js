import {
  clearPage,
  renderPageNotFound,
  renderHomeHeader,
  renderLibraryHeader,
} from './renderServies';

// import { renderLibraryCollection } from './libraryCollection';
import { renderLibraryCollection } from '../firebase/db';
import { fetchMoviesAndRender, fetchGenresListByIds } from './fetchAndRender';
import { showButtonLoad, hideButtonLoad } from './pagination';

export async function homePage(user) {
  clearPage();
  renderHomeHeader(user);

  await fetchGenresListByIds();
  await fetchMoviesAndRender();
  showButtonLoad();
}

export async function libraryPage(key, user) {
  clearPage();
  renderLibraryHeader();
  await renderLibraryCollection(key, user);

  hideButtonLoad();
}

export function notFoundPage() {
  clearPage();

  renderPageNotFound();

  hideButtonLoad();
}
