import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RolesModule } from './roles/roles.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeConfig } from './config/TypeConfig';
import { GenresModule } from './genres/genres.module';
import { CommentsUsersModule } from './comments_users/comments_users.module';
import { MoviesGenresModule } from './movies_genres/movies_genres.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeConfig()),UsersModule, MoviesModule, ReviewsModule, RolesModule, LoginModule, GenresModule, CommentsUsersModule, MoviesGenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
