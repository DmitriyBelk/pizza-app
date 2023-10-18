import ContentLoader from "react-content-loader";

const CardSkeleton = () => (
<ContentLoader 
    speed={2}
    width={260}
    height={440}
    viewBox="0 0 260 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="238" y="289" rx="0" ry="0" width="1" height="0" /> 
    <circle cx="119" cy="119" r="119" /> 
    <rect x="0" y="253" rx="5" ry="5" width="258" height="30" /> 
    <rect x="0" y="296" rx="5" ry="5" width="282" height="83" /> 
    <rect x="0" y="397" rx="5" ry="5" width="111" height="33" /> 
    <rect x="143" y="396" rx="25" ry="25" width="117" height="35" />
  </ContentLoader>
)

export default CardSkeleton;
