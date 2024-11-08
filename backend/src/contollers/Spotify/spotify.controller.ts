import { Controller, Get, Param } from '@nestjs/common';
import { SpotifyService } from '../../services';
let authToken = null;

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly SpotifyService: SpotifyService) {}

  @Get()
  async getAccessToken(): Promise<void> {
    if (!authToken) {
      try {
        const _authToken = await this.SpotifyService.getAuthToken();
        authToken = _authToken;
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }

  @Get('album/:id')
  async getAlbum(@Param('id') albumIds: string) {
    console.log('Hello');
    try {
      const albumsInfo = await this.SpotifyService.getAlbums(
        albumIds,
        authToken,
      );
      console.log(albumsInfo);
    } catch (error) {
      console.error(error.status);
    }
  }
  @Get('search/:name')
  async searchAlbums(@Param('name') albumName: string) {
    try {
      const albumData = await this.SpotifyService.searchAlbum(
        albumName,
        authToken,
      );
      console.log(albumData);
    } catch (error) {
      console.error(error);
    }
  }
}
