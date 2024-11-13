import { Controller, Get, Param } from '@nestjs/common';
import { SpotifyService } from '../../services';
let accessToken = null;

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly SpotifyService: SpotifyService) {}

  @Get()
  async getAccessToken(): Promise<void> {
    if (!accessToken) {
      try {
        const _accessToken = await this.SpotifyService.getAccessToken();
        accessToken = _accessToken;
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
        accessToken,
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
        accessToken,
      );
      console.log(albumData);
      return albumData;
    } catch (error) {
      console.error(error);
    }
  }
}
