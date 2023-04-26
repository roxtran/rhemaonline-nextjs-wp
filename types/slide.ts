type SlideType = {
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  slideFields: {
    ctaUrl: string;
  };
};

export default SlideType;
