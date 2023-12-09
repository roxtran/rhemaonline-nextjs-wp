type SlideType = {
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  slideFields: {
    ctaUrl?: string;
    openLinkNewTab?: boolean;
    churchCenterModal?: boolean;
  };
};

export default SlideType;
