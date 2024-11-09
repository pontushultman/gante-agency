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
   * Bio — `text`
   *
   *
   */
  bio?: string;

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

export type Documents = Artists | MusicFormat | ArtistType;
