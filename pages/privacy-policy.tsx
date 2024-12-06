import { Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import styled from "styled-components";

const PrivacyPolicy = () => {
  const pageTitle = "Privacy Policy";
  const pageImage = "/img/legal-terms-img.jpg";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} height="28.125rem" />
      <PrivacyContainer>
        <div className="content-wrapper">
          <p>
            This Privacy Policy describes our policies and procedures on collecting, using, and disclosing your
            information when you use our Services. It also tells you about your privacy rights and how the law protects
            you. We use Your data to provide and improve Our Services. By using our Service, you agree to the collection
            and use of information under this Privacy Policy. This Privacy Policy has been created with the help of the
            Privacy Policy Generator.
          </p>
          <b>
            <span>Interpretation</span>
          </b>
          <p>
            The words in which the initial letter is capitalized have meanings defined under the following conditions.
            The following definitions shall have the same meaning regardless of whether they appear in singular or
            plural.
          </p>
          <b>
            <span>Definitions</span>
          </b>
          <br />
          <span>For this Privacy Policy:</span>
          <ul>
            <li>
              <b>
                <span>Account</span>
              </b>
              <span> means a unique account created for you to access our Service or parts of our Service.</span>
            </li>
            <li>
              <b>
                <span>Company</span>
              </b>
              <span>
                {" "}
                (referred to as either "the Company," "We," "Us," or "Our" in this Agreement) refers to Rhema Christian
                Ministries.
              </span>
            </li>
            <li>
              <b>
                <span>Cookies</span>
              </b>
              <span>
                {" "}
                are small files a website places on your computer, mobile device, or any other device. They contain your
                browsing history on that website and its many uses.
              </span>
            </li>
            <li>
              <b>
                <span>Country</span>
              </b>
              <span> refers to Ontario, Canada</span>
            </li>
            <li>
              <b>
                <span>Device</span>
              </b>
              <span>
                {" "}
                means any device that can access the Service, such as a computer, a cellphone, or a digital tablet.
              </span>
            </li>
            <li>
              <b>
                <span>Personal Data</span>
              </b>
              <span> is any information related to an identified or identifiable individual.</span>
            </li>
            <li>
              <b>
                <span>Service</span>
              </b>
              <span> refers to the Website.</span>
            </li>
            <li>
              <b>
                <span>Service Provider</span>
              </b>
              <span>
                {" "}
                means any natural or legal person who processes the data on behalf of the Company. It refers to
                third-party companies or individuals employed by the Company to facilitate Our Service, to provide Our
                Service on behalf of the Company, to perform services related to the Service, or to assist the Company
                in analyzing how Our Service is used.
              </span>
            </li>
            <li>
              <b>
                <span>Usage Data</span>
              </b>
              <span>
                {" "}
                refers to data collected automatically, either generated using Our Service or from Our Service
                infrastructure (for example, the duration of a page visit).
              </span>
            </li>
            <li>
              <b>
                <span>Website </span>
              </b>
              <span>refers to Rhema Christian Ministries, accessible from </span>
              <a href="http://www.rhemaonline.ca/">
                <span>www.rhemaonline.ca</span>
              </a>
            </li>
            <li>
              <b>
                <span>You </span>
              </b>
              <span>
                refer to the individual accessing or using Our Service, the company, or other legal entity on behalf of
                which such individual is accessing or using Our Service, as applicable.
              </span>
            </li>
          </ul>
          <b>
            <u>
              <span>TYPES OF DATA COLLECTED</span>
            </u>
          </b>
          <br />
          <b>
            <span>Personal Data</span>
          </b>
          <br />
          <span>
            While using Our Service, we may ask you to provide Us with certain personally identifiable information that
            can be used to contact or identify you. Personally identifiable information may include but is not limited
            to:
          </span>
          <ul>
            <li>
              <span> Email address</span>
            </li>
            <li>
              <span> First name and last name</span>
            </li>
            <li>
              <span> Phone number</span>
            </li>
            <li>
              <span> Address, State, Province, ZIP/Postal code, City</span>
            </li>
            <li>
              <span> Usage Data</span>
            </li>
          </ul>
          <b>
            <span>Usage Data</span>
          </b>
          <br />
          <p>
            Usage Data is collected automatically when using Our Service. Usage Data may include information such as
            your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our
            Service that you visit, the time and date of your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data. When you access the Service by or through a mobile device, we may
            collect certain information automatically, including, but not limited to, the type of mobile device you use,
            your mobile device's unique ID, the IP address of your mobile device, your mobile operating system, the type
            of mobile Internet browser you use, unique device identifiers and other diagnostic data. We may also collect
            information that your browser sends whenever you visit our Service or access the Service through a mobile
            device.
          </p>
          <b>
            <u>
              <span>USE OF YOUR PERSONAL DATA</span>
            </u>
          </b>
          <br />
          <span></span>
          <span>The Company may use Personal Data for the following purposes:</span>
          <ul>
            <li>
              <span> To provide and maintain our Service, including monitoring the usage of our Service.</span>
            </li>
            <li>
              <span>
                {" "}
                To manage your account and registration as a user of our service. The Personal Data you provide can give
                you access to different functionalities of our Service that are available to you as a registered user.
              </span>
            </li>
            <li>
              <span>
                {" "}
                For the performance of a contract: the development, compliance, and undertaking of the purchase contract
                for the products, items, or services you have purchased or any other contract with us through our
                Service.
              </span>
            </li>
            <li>
              <span>
                {" "}
                To contact You: by email, telephone calls, SMS, or other equivalent forms of electronic communication,
                such as a mobile application's push notifications regarding updates or informative communications
                related to the functionalities, products, or contracted services, including the security updates, when
                necessary or reasonable for their implementation.
              </span>
            </li>
            <li>
              <span>
                {" "}
                When you register online for an event, we ask for various personal information. We use this information
                only for matters related to your registration and involvement in the event and to follow up about the
                event.
              </span>
            </li>
            <li>
              <span>
                {" "}
                To provide you with news, special offers, and general information about other goods, services, and
                events that we offer that are like those that you have already purchased or enquired about unless you
                have opted not to receive such information.
              </span>
            </li>
            <li>
              <span> To manage your requests to us.</span>
            </li>
            <li>
              <span>
                {" "}
                For other purposes: We may use your information for other purposes, such as data analysis, identifying
                usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving
                our Service, products, services, marketing, and experience.
              </span>
            </li>
          </ul>
          <span>We may share your personal information in the following situations:</span>
          <ul>
            <li>
              <span>
                {" "}
                With Service Providers: We may share your personal information with Service Providers to monitor and
                analyze the use of our Service and to contact you.
              </span>
            </li>
            <li>
              <span>
                {" "}
                With Affiliates: We may share your information with our affiliates, in which case we will require those
                affiliates to honor this Privacy Policy. Affiliates include our parent company and any other
                subsidiaries, joint venture partners, or other companies we control or are under common control with.
              </span>
            </li>
            <li>
              <span>
                {" "}
                With business partners: We may share your information with our business partners to offer you certain
                products, services, or promotions.
              </span>
            </li>
            <li>
              <span>
                {" "}
                With other users: When you share personal information or otherwise interact in public areas with other
                users, such information may be viewed by all users and may be publicly distributed outside.
              </span>
            </li>
            <li>
              <span>
                {" "}
                With Your Consent: We may disclose your personal information for any other purpose with your consent. We
                recommend you review each service's privacy policy before releasing personal or sensitive information.
              </span>
            </li>
          </ul>
          <b>
            <u>
              <span>DISCLOSURE OF YOUR DATA</span>
            </u>
          </b>
          <br />
          <b>
            <span>Law Enforcement</span>
            <br />
          </b>
          <span>
            Under certain circumstances, the Company may be required to disclose your Data if required by law or in
            response to valid requests by public authorities (e.g., a court or a government agency). Other legal
            requirements The Company may disclose your Data in the good faith belief that such action is necessary to:
          </span>
          <ul>
            <li>
              <span> Comply with a legal obligation</span>
            </li>
            <li>
              <span> Protect and defend the rights or property of the Company</span>
            </li>
            <li>
              <span> Prevent or investigate possible wrongdoing in connection with the Service</span>
            </li>
            <li>
              <span> Protect the personal safety of users of the Service or the public</span>
            </li>
            <li>
              <span>Protect against legal liability</span>
            </li>
          </ul>
          <b>
            <span>TRACKING TECHNOLOGIES AND COOKIES</span>
          </b>
          <br />
          <p>
            Rhema Christian Ministries collects and uses the information contained within an automatically created
            traffic log on our website. JavaScript, Cookies, and other tracking codes are included on all pages of our
            websites for use with Google Analytics. We use this information in a combined form to calculate overall site
            traffic patterns, analyze user trends, and administer the website. We use Cookies and similar tracking
            technologies to track the activity of our service and store certain information. Tracking technologies are
            beacons, tags, and scripts to collect and track information and improve and analyze our Service. The
            technologies we use may include:
          </p>
          <ul>
            <li>
              <b>
                <span>Cookies or Browser Cookies</span>
              </b>
              <span>
                {" "}
                - A Cookie is a small file placed on your device. You can instruct your browser to refuse all Cookies or
                indicate when a Cookie is being sent. However, if you do not accept Cookies, you may be unable to use
                some parts of our Service. Our service may use Cookies unless you have adjusted your browser settings to
                refuse Cookies.
              </span>
            </li>
            <li>
              <b>
                <span>Flash Cookies</span>
              </b>
              <span>
                {" "}
                - Certain Service features may use locally stored objects (or Flash Cookies) to collect and store
                information about your preferences or activity on our Service. Flash Cookies are not managed using the
                same browser settings as those used for browser Cookies. For more information on how you can delete
                Flash Cookies, please read "Where can I change the settings for disabling or deleting local shared
                objects?" available at
                https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting
                _local_shared_objects_
              </span>
            </li>
            <li>
              <b>
                <span>Web Beacons</span>
              </b>
              <span>
                {" "}
                - Certain sections of our Service and our emails may contain small electronic files known as web beacons
                (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for
                example, to count users who have visited those pages or opened an email and for other related website
                statistics (for example, recording the popularity of a particular section and verifying system and
                server integrity).
              </span>
            </li>
          </ul>
          <p>
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or
            mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.
            We use both Session and Persistent Cookies for the purposes set out below:
          </p>
          <ul>
            <li>
              <b>
                <span>Necessary / Essential Cookies</span>
              </b>
              <br />
              <span>Type: Session Cookies</span>
              <br />
              <span>Administered by: Us</span>
              <p>
                Purpose: These Cookies are essential to providing you with services available through the Website and
                enabling you to use some of its features. They help to authenticate users and prevent fraudulent use of
                user accounts. Without these Cookies, the services you have asked for cannot be provided, and we only
                use these Cookies to offer you those services.
              </p>
            </li>
            <li>
              <b>
                <span>Cookies Policy / Notice Acceptance Cookies</span>
              </b>
              <span>Type: Persistent Cookies</span>
              <br />
              <span>Administered by: Us</span>
              <p>Purpose: These Cookies identify if users have accepted Cookies on the Website.</p>
            </li>
            <li>
              <b>
                <span> Functionality Cookies</span>
              </b>
              <br />
              <span>Type: Persistent Cookies</span>
              <br />
              <span>Administered by: Us</span>
              <p>
                Purpose: These Cookies allow us to remember your choices when you use the Website, such as your login
                details or language preference. The purpose of these Cookies is to provide you with a more personal
                experience and to avoid having to re-enter your preferences every time you use the Website.
              </p>
            </li>
          </ul>
          <p>
            For more information about the Cookies we use and your choices regarding Cookies, please visit the Cookies
            section of our Privacy Policy.
          </p>
          <b>
            <span>Google Maps</span>
          </b>
          <p>
            We may use Cookies and other tracking technologies to collect and store your information. This website uses
            Google Maps APIs. You may find the Google Maps API Terms of Service here. Using our Maps API Implementation,
            you agree to be obliged by Google’s Terms of Service. You agree to allow us to acquire or cache your
            location. You may withdraw your consent at any time.
          </p>
          <b>
            <span>Data Retention</span>
          </b>
          <p>
            The Company will retain your Data only for as long as is necessary for the purposes set out in this Privacy
            Policy. We will retain and use your Data to the extent necessary to comply with our legal obligations (for
            example, if we are required to retain your data to comply with applicable laws), resolve disputes, and
            enforce our legal agreements and policies. The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen
            the security or to improve the functionality of Our Service, or We are legally obligated to retain this data
            for longer periods.
          </p>
          <b>
            <span>Security of Your Personal Data</span>
          </b>
          <p>
            We are committed to protecting your data, but remember that no method of transmission over the Internet or
            electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your
            Data, we cannot guarantee its absolute security.
          </p>
          <b>
            <span>Transfer of Your Data</span>
          </b>
          <p>
            Your information, including Personal Data, is processed at the Company's operating offices and in any other
            places where the parties involved in the processing are located. This means that this information may be
            transferred to — and maintained on — computers outside your state, province, country, or other governmental
            jurisdiction where the data protection laws differ from yours. Your consent to this Privacy Policy, followed
            by submitting such information, represents your agreement to that transfer. The Company will take all steps
            reasonably necessary to ensure that your Data is treated securely under this Privacy Policy, and no transfer
            of your Data will take place to an organization or a country unless there are adequate controls in place,
            including the security of your Data and other personal information.
          </p>
          <b>
            <span>Children's Privacy</span>
          </b>
          <p>
            Our Service does not knowingly collect personally identifiable information from anyone under 13. If you are
            a parent or guardian and know your child has provided us with Personal Data, please contact us. If we become
            aware that we have collected Personal Data from anyone under the age of 13 without verification of parental
            consent, we will take steps to remove that information from our servers. If we need to rely on consent as a
            legal basis for processing your information and your country requires consent from a parent, we may require
            your parent's permission before We collect and use that information.
          </p>
          <b>
            <span>Your Privacy Rights</span>
          </b>
          <p>
            If you are a user living in the European Economic Area, you have the right to complain if you take issue or
            have any concerns about our privacy policy. To learn more about your rights and how to make a complaint to
            the data protection authority, please visit:{" "}
            <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en">
              <span>https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en</span>
            </a>
          </p>
          <b>
            <span>Links to Other Websites</span>
          </b>
          <br />
          <p>This Privacy Policy applies only to sites and apps operated by Rhema Christian Ministries.</p>
          <p>
            Our Service may contain links to other websites not operated by us. If you click on a third-party link, you
            will be directed to that third-party's site. We strongly advise you to review the Privacy Policy of every
            site You visit. You are responsible for reviewing the privacy statements and policies of those other
            websites you choose to link to or from one of our sites so that you can understand how those websites
            collect, use, and store your information. If you link to other websites, applications, and services or
            profiles with third-party applications, you will provide the personal data stored on those applications to
            Rhema Christian Ministries. As noted above, third-party sites associated with our sites may collect
            information using automated technologies such as Cookies. We have no control over and assume no
            responsibility for third-party sites or services' content, privacy policies, or practices.
          </p>
          <b>
            <span>Third-party services/providers</span>
          </b>
          <ul>
            <li>
              <a href="https://www.constantcontact.com/ca/legal/privacy-notice">
                <span> https://www.constantcontact.com/ca/legal/privacy-notice</span>
              </a>
            </li>
            <li>
              <a href="https://get.tithe.ly/privacy-policy">
                <span> https://get.tithe.ly/privacy-policy</span>
              </a>
            </li>
            <li>
              <a href="https://www.paypal.com/ca/webapps/mpp/ua/privacyfull?locale.x=en_CA">
                <span> https://www.paypal.com/ca/webapps/mpp/ua/privacyfull?locale.x=en_CA</span>
              </a>
            </li>
            <li>
              <a href="https://www.planningcenter.com/privacy">
                <span> https://www.planningcenter.com/privacy</span>
              </a>
            </li>
            <li>
              <span></span>
              <a href="https://policies.google.com/privacy?hl=en-US">
                <span>https://policies.google.com/privacy?hl=en-US</span>
              </a>
            </li>
          </ul>
          <b>
            <span>Changes to this Privacy Policy</span>
          </b>
          <p>
            We may update Our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. We will let you know via email and/or a prominent notice on Our Service before
            the change becomes effective and update the "Last Updated" date at the top of this Privacy Policy. You are
            advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
            effective when posted on this page. You can contact us if you have any questions about this Privacy Policy.
          </p>
        </div>
      </PrivacyContainer>
    </>
  );
};

const PrivacyContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    word-wrap: break-word;

    li a {
      text-decoration: underline;
    }
  }
`;

export default PrivacyPolicy;
