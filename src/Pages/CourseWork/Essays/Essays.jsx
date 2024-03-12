import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`01: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <ul>
                    <li>
                        <b>HTML is hypertext markup language</b>; it is used for
                        basic web page design and creation and essentially
                        defines the content of web pages, which can include test
                        or graphics.{" "}
                    </li>
                    <li>
                        <b>CSS is short for cascading stylesheets</b> ; these
                        are used to define styles within a page or site. There
                        are internal and external cascading stylesheets that can
                        be applied for consistent design settings for web pages,
                        and often can be used to apply certain settings in a
                        hierarchical way depending on the content; some examples
                        of parameters CSS can define include margins, font
                        styles, layout, colors or other visual effects such as
                        nested blocks.{" "}
                    </li>
                    <li>
                        <b>
                            Javascript can be thought of as the <i>doing</i>{" "}
                            side of web design
                        </b>
                        it’s really the third layer of dynamic site creation.
                        Javascript is a scripting or programming language that
                        allows you to implement complex features (or dynamic
                        content) on web pages. For instance, Javascript can be
                        used to create interactive content such as scrolling
                        videos, interactive maps or timely content (live
                        content), it can call information from other sources and
                        run code based on certain defined events, create strings
                        of text through programming, these are just a few
                        examples of how one can utilize Javascript programming
                        to create dynamic content within a site.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`02: What is the difference between Git and Github?`}
            >
                <ul>
                    <li>
                        <b>Git</b> is a popular free open-source version control
                        system (VCS) that allows developers to track changes
                        within their code, it is a locally installed software.
                        One typically interacts with Git through command lines.
                    </li>
                    <li>
                        <b>Github</b> is a pay-for-use online service that is
                        designed to run Git in the cloud. Github is an online
                        (web-based) service by Microsoft. Github utilizes Git
                        and offers a web-interface for tracking changes and
                        collaboration across users or a team. Github makes Git
                        more user-friendly and also provides a platform for
                        developers to share code with others. In addition,
                        GitHub makes it easy for others to contribute to
                        projects. It also has a robust API that allows
                        developers to integrate GitHub into their own
                        applications and workflows.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`03: What is the difference between JQuery and React?`}
            >
                Both jQuery and React follow JavaScript syntax but use different
                internal frameworks to interact with the DOM. jQuery employs
                native JavaScript methods directly, while React uses its own set
                of methods and structures to manage the DOM. This leads to
                fundamental differences:
                <ul>
                    <li>
                        <b>jQuery </b>was developed as a fast, small,
                        feature-rich JavaScript library, primarily designed to
                        simplify tasks like HTML document traversal,
                        manipulation, event handling, and animation. For
                        example, jQuery lets JavaScript developers execute many
                        complex tasks in a single line of code.{" "}
                    </li>
                    <li>
                        <b>React </b>was created primarily to facilitate
                        building user interfaces, especially complex ones that
                        provide an excellent user experience. Getting to the
                        point of generating simple animations in React requires
                        that you scaffold the basic React app first. That takes
                        some initial work. Once the scaffold exists, React lets
                        you do many more complex things easily that jQuery
                        can’t. The rule of thumb could be:
                        <ul>
                            <li>
                                For quick JavaScript solutions in existing
                                projects, use jQuery, because of its ease of
                                use.
                            </li>
                            <li>
                                For building an entire app from scratch,
                                especially large applications, consider using
                                React. React uses JSX, an XML-like syntax
                                extension for JavaScript to reduce complexity
                                when creating user interfaces.
                            </li>
                        </ul>
                        <b>About JSX:</b> HTML, CSS, and JavaScript work
                        together to create interfaces across the web. Their code
                        usually sits in different files. JSX allows you to
                        combine HTML-like and JavaScript code in a single file,
                        making creating reusable, component-based UIs easier.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`04: What is the difference between a Front-End and Back-End Developer?`}
            >
                <b>Front-end developers</b> tend to focus on the design and
                interactive elements that users will engage with on the site
                (visual structures and navigation tools), while{" "}
                <b>back-end developers</b> work on the programming side of a
                site to make sure all things ‘work’. For front-end developers,
                they assist with designing using wireframing, layout and
                interactive tools such as buttons or menus. Typically front-end
                developers work more closely with the clients while backend
                developers are the ‘silent partners’ of frontend developers.
                Those developers that can do both fron-tend and back-end
                development are known as full-stack developers.
            </SingleEssay>
            <SingleEssay
                question={`05: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                In React, there are two ways to think of linking to resources:
                <ul>
                    <li>
                        <b>Root Relative</b> paths are based on the root folder
                        for a site. It assumes that this will remain unchanged,
                        if the root changes then the path can break.
                    </li>
                    <li>
                        <b>Document Relative</b> paths are based on the location
                        of the current document, this path can be listed in JSX
                        as `../../Whateverfile` with the `../` indicating the
                        file tree of the current document's location.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`06: What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <li>
                        <b>JPG:</b> Jpgs are lossy raster files which means they
                        lose a small amount of information everytime the JPG is
                        saved. JPGs work with compressing color so they are
                        great for photographs and complex digital imagery. A
                        high-resolution jpg is usually also suitable these days
                        for printing with most print-on-demand companies. We are
                        mostly discussing web use here, but there are a variety
                        of file formats available for print. The reduction of
                        file size results in the reduction of image quality.
                    </li>
                    <li>
                        <b>GIF:</b> Gifs are a bitmap format that supports up to
                        8 bits per pixel which limits its color palette to 256.
                        Because of this limitation, gifs aren't really good for
                        photographs and are mostly known for creating animated
                        memes.
                    </li>
                    <li>
                        <b>PNG:</b> PNGs are not for printing professional
                        graphic images and are used for web graphics. PNGs are
                        raster graphics and this filetype was created and
                        considered an improvement to the GIF. PNGs work well
                        with line art images and photographs for websites but
                        can result in large file sizes. PNGs also offer alpha
                        transparency which alllows for each individual pixel to
                        have its own level of opacity. PNGs come in two types
                        PNG-8 and PNG-24. PNG-8 means that the file has only 8
                        bits per pixel and the PNG-24 has 24 bits per pixel.
                    </li>
                    <li>
                        <b>SVG:</b> SVGs are vector graphics that support
                        animation and their behaviors are defined in XML files.
                        Vector graphics are great for logos and line art because
                        they aren't made from pixels and can be infinitely
                        resized without losing quality or increasing in size.
                        SVGs are your best option when creating icons and line
                        art for high-resolution displays.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`07: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <ul>
                    <li>
                        The <b>Product Manager</b> is the person who identifies
                        the customer need and the larger business objectives
                        that a product or feature will fulfill, articulates what
                        success looks like for a product, and rallies a team to
                        turn that vision into a reality. After 10 years of
                        studying the craft of product management, I’ve developed
                        a deep understanding of what it means to be a product
                        manager. While a product manager defines the direction
                        of the product through research, vision-setting,
                        alignment, and prioritization, the product owner should
                        work more closely with the development team to execute
                        against the goals that the product manager helps to
                        define.
                    </li>
                    <li>
                        The <b>Product Owner</b> manages the product roadmap and
                        prioritize the backlog. They also define the product
                        vision and manage stakeholders. They have the authority
                        to make key decisions and in particular, are responsible
                        for making sure the team is working on the right items.
                        It is helpful for the product owner to be able to
                        communicate effectively with stakeholders. The Product
                        owner should be able to understand what customers want
                        and make adjustments accordingly. They can liaise
                        between engineering and business teams, and they can
                        offer insights to marketing and sales teams about the
                        product if needed.{" "}
                    </li>
                    <li>
                        <b>Business Analyst</b> The main goal of an Agile
                        Business Analyst is to solve business problems as and
                        when they occur. While the rest of the Agile team is
                        focused on producing new pieces of working software in
                        every iteration or sprint, they are focused on the main
                        goal of the entire project. Because they are not so
                        focused on documenting all the requirements and rules
                        for the project, they can spend more time on actual
                        business analysis.
                    </li>
                    <li>
                        <b>Scrum Master</b> facilitate scrums – the Agile
                        framework that focuses on time-boxed iterations called
                        sprints. Scrum masters act as coaches to the rest of the
                        team. They facilitate daily stand-up meetings and
                        oversee sprint planning meetings where they help to keep
                        the team focused and prevent scope creep. They manage
                        sprint reviews and gather feedback, and they also remove
                        roadblocks that could hamper the team’s productivity.{" "}
                    </li>
                    <li>
                        <b>UX Designer</b> Work with the product owner to come
                        up with designs for the product.
                    </li>
                    <li>
                        <b>Developer/Engineer</b> An Agile team consists of more
                        than one developer, but these are the next essential
                        role after the product owner. Developers will build your
                        product, and they are responsible for programming,
                        testing, and debugging the product.
                    </li>
                    <li>QA/SDET</li>
                    <li>
                        <b>DevOps</b> Work on version control, testing,
                        security, integration, and deployment.
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};
export default Essays;

const EssaysStyled = styled.div``;
