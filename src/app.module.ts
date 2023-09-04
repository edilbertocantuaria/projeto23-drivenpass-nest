import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EraseModule } from './erase/erase.module';
import { CredentialsModule } from './credentials/credentials.module';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [EraseModule, CredentialsModule, UsersModule, NotesModule, CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
