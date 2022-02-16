import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'about-app',
    loadChildren: () =>
      import('./about-app/about-app.module').then((m) => m.AboutAppPageModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'webinar',
    loadChildren: () =>
      import('./webinar/webinar.module').then((m) => m.WebinarPageModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.module').then((m) => m.BlogPageModule),
  },
  {
    path: 'left-pannel',
    loadChildren: () =>
      import('./_component/left-pannel/left-pannel.module').then(
        (m) => m.LeftPannelPageModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
