import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Artists
 *
 *
 */
export interface Artists extends SanityDocument {
  _type: "artists";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Artist Type — `reference`
   *
   *
   */
  artistType?: SanityReference<ArtistType>;

  /**
   * Music Format — `array`
   *
   *
   */
  musicFormat?: Array<SanityKeyedReference<MusicFormat>>;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `text`
   *
   *
   */
  bio?: string;

  /**
   * Social links — `object`
   *
   *
   */
  socialLinks?: {
    _type: "socialLinks";
    /**
     * Facebook — `url`
     *
     *
     */
    facebook?: string;

    /**
     * Instagram — `url`
     *
     *
     */
    instagram?: string;

    /**
     * Spotify — `url`
     *
     *
     */
    spotify?: string;

    /**
     * YouTube — `url`
     *
     *
     */
    youtube?: string;
  };

  /**
   * Video gallery — `array`
   *
   *
   */
  videoGallery?: Array<SanityKeyed<string>>;

  /**
   * Image gallery — `array`
   *
   *
   */
  imageGallery?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
}

/**
 * Music format
 *
 *
 */
export interface MusicFormat extends SanityDocument {
  _type: "musicFormat";

  /**
   * Music format — `string`
   *
   *
   */
  musicFormat?: string;
}

/**
 * Artist type
 *
 *
 */
export interface ArtistType extends SanityDocument {
  _type: "artistType";

  /**
   * Artist type — `string`
   *
   *
   */
  artistType?: string;
}

/**
 * Event
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Date — `datetime`
   *
   * Date and time of the event
   */
  date?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Artist Playing — `reference`
   *
   * Select the artist playing at the event
   */
  artist?: SanityReference<Artists>;

  /**
   * Ticket Link — `url`
   *
   * Link to buy tickets for the event
   */
  ticketLink?: string;
}

export type Documents = Artists | MusicFormat | ArtistType | Event;
