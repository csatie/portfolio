export const textStyleVariantsMap = {
  light: `
    font-weight: ${({ theme }) => theme.typographyVariants.light.fontWeight};
    letter-spacing: ${({ theme }) =>
      theme.typographyVariants.light.letterSpacing};
    text-transform: ${({ theme }) =>
      theme.typographyVariants.light.textTransform};
  `,
};
