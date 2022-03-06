import React , {useEffect, useRef} from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blogs = () => {
    const {contentRef} = useLinkNewTab();
    const {hovered, nodeRef} = useHover();
  return (
    <div ref={contentRef}>
      <p className="mb-5 entry-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, totam?
        Sapiente cumque repellendus distinctio nostrum repellat excepturi
        possimus atque maxime blanditiis. Libero dolor excepturi obcaecati!
        Impedit quibusdam asperiores vel et.
        <a href="/" ref={nodeRef} className={` underline ${hovered ? 'text-green-400': ''}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem
        eveniet obcaecati? Maiores quos ducimus laudantium officia adipisci
        expedita aspernatur dicta, modi cum dolores nemo vero minima omnis.
        Repudiandae, quae?
      </a>
      </p>
      <p className="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        rerum obcaecati praesentium perferendis esse, laboriosam aut rem fugit
        placeat quae totam maxime, harum mollitia optio error? Ea minima ipsa
        praesentium.
        <a>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sint
          dolorem accusamus iste optio est. Deleniti libero dicta impedit omnis
          qui iste? Officiis vero in cumque minima esse provident aperiam.
        </a>
      </p>
    </div>
  );
};

export default Blogs;
