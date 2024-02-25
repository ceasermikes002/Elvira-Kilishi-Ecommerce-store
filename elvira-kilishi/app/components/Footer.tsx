"use client"
import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsThreads,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const FooterComponent = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="/"
              src="/Elvira-Kilishi-logo.jpg"
              alt="Business Logo"
              width={60}
              height={60}
              className="w-20 h-20 mr-3"
              name="Elvira's Kilishi"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div></div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Instagram</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
  <FooterTitle title="Legal" />
  <FooterLinkGroup col>
    <FooterLink href="https://smallpdf.com/file#s=89460162-9472-4377-a150-87aeb77aeadd">
      Privacy Policy
    </FooterLink>
    <FooterLink href="https://smallpdf.com/file#s=89460162-9472-4377-a150-87aeb77aeadd">
      Terms &amp; Conditions
    </FooterLink>
  </FooterLinkGroup>
</div>

          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Elvira's Kilishi"
            year={currentYear} // Insert current year here
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsThreads} />
            <FooterIcon href="#" icon={BsTiktok} />
            <FooterIcon href="#" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
