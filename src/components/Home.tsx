import React, { CSSProperties } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CarDetails from './car/CarDetails';
import { CarList } from './car/CarList';
export interface HomeProps {
  client: any
}
export const Home: React.FC<HomeProps> = props => {
  return (
    <>
      {sectionOne()}
      {/*{featureSection()}
      {applicationFeaturesSection()}
      {applicationFeaturesSectionTwo()}
      {reviewsSection()}
  {pricingSection()} */}
      {/* {gqlExample()} */}
      <BrowserRouter>
        <Route exact path="/">
          <SignUp></SignUp>
        </Route>
        <Route path="/sectionOne">
          <JoinUsSection></JoinUsSection>
        </Route>
        <Route path="/faq">
          <FaqSection props={props}></FaqSection>
        </Route>
        <Route path="/carDetails">
          <CarDetails props={props}></CarDetails>
        </Route>
        <Route path="/cars">
          <CarList></CarList>
        </Route>
      </BrowserRouter>
    </>
  )
}

export const gqlExample = () => {
  return (
    <Query
      query={gql`
      {
        hello
      }
    `}
    >
      {({ loading, error, data }: any) => {
        console.log(`in gql section`);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return <p>{data.hello}</p>
      }}
    </Query>);
}

export const JoinUsSection = () => {
  const joinUsStyle: CSSProperties = {
    backgroundImage: "url(assets/images/1900x1200_img_5.jpg)"
  }
  return (
    <section className="pb_xl_py_cover overflow-hidden pb_slant-light pb_gradient_v1 cover-bg-opacity-8" style={joinUsStyle}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 justify-content-center">
            <h2 className="heading mb-5 pb_font-40">Join over 1M+ people who uses Instant App</h2>
            <div className="sub-heading">
              <p className="mb-4">New free template by <a href="http://uicookies.com" target="_blank">uicookies.com</a>. For more templates visit the <a href="http://uicookies.com" target="_blank">site</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <form action="#" className="bg-white rounded pb_form_v1">
              <h2 className="mb-4 mt-0 text-center">Sign Up for Free</h2>
              <div className="form-group">
                <input type="text" className="form-control py-3 reverse" placeholder="Full name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control py-3 reverse" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control py-3 reverse" placeholder="Email" />
              </div>
              <div className="form-group">
                <div className="pb_select-wrap">
                  <select className="form-control pb_height-50 reverse">
                    <option value="" selected>Type</option>
                    <option value="">Basic</option>
                    <option value="">Business</option>
                    <option value="">Free</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FaqProps {
  props: any
}

export const FaqSection = (props: FaqProps) => {
  console.log(`faq props`, props);
  return (
    <section className="pb_section pb_slant-white" id="section-faq">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 text-center mb-5">
            <h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>FAQ</strong></h5>
            <h2>Frequently Ask Questions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div id="pb_faq" className="pb_accordion" data-children=".item">
              <div className="item">
                <a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq1" aria-expanded="true" aria-controls="pb_faq1" className="pb_font-22 py-4">What is Instant?</a>
                <div id="pb_faq1" className="collapse show" role="tabpanel">
                  <div className="py-3">
                    <p>Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq2" aria-expanded="false" aria-controls="pb_faq2" className="pb_font-22 py-4">Is this available to my country?</a>
                <div id="pb_faq2" className="collapse" role="tabpanel">
                  <div className="py-3">
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq3" aria-expanded="false" aria-controls="pb_faq3" className="pb_font-22 py-4">How do I use the features of Instant App?</a>
                <div id="pb_faq3" className="collapse" role="tabpanel">
                  <div className="py-3">
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq4" aria-expanded="false" aria-controls="pb_faq4" className="pb_font-22 py-4">How much do the Instant App cost?</a>
                <div id="pb_faq4" className="collapse" role="tabpanel">
                  <div className="py-3">
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                  </div>
                </div>
              </div>

              <div className="item">
                <a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq5" aria-expanded="false" aria-controls="pb_faq5" className="pb_font-22 py-4">I have technical problem, who do I email?</a>
                <div id="pb_faq5" className="collapse" role="tabpanel">
                  <div className="py-3">
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const pricingSection = () => {
  return (
    <section className="pb_section bg-light pb_slant-white" id="section-pricing">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 text-center mb-5">
            <h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>Pricing</strong></h5>
            <h2>Choose Your Plans</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="pb_pricing_v1 p-5 border text-center bg-white">
              <h3>Basic</h3>
              <span className="price"><sup>$</sup>19<span>month</span></span>
              <p className="pb_font-15">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <p className="mb-0"><a href="#" role="button" className="btn btn-secondary">Get started</a></p>
            </div>
          </div>
          <div className="col-md">
            <div className="pb_pricing_v1 p-5 border border-primary text-center bg-white">
              <h3>Business</h3>
              <span className="price"><sup>$</sup>39<span>month</span></span>
              <p className="pb_font-15">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <p className="mb-0"><a href="#" role="button" className="btn btn-primary btn-shadow-blue">Get started</a></p>
            </div>
          </div>
          <div className="col-md">
            <div className="pb_pricing_v1 p-5 border text-center bg-white">
              <h3>Free</h3>
              <span className="price"><sup>$</sup>99<span>month</span></span>
              <p className="pb_font-15">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <p className="mb-0"><a href="#" role="button" className="btn btn-secondary">Get started</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const reviewsSection = () => {
  return (
    <section className="pb_section pb_slant-light pb_pb-220" id="section-reviews">
      <div className="container">
        <div className="row justify-content-center mb-1">
          <div className="col-md-6 text-center mb-5">
            <h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>Reviews</strong></h5>
            <h2>Good Review From Good People</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="pb_slide_testimonial_sync_v1">
              <div className="pb_slider_content js-pb_slider_content2">
                <div>
                  <div className="media d-block text-center testimonial_v1 pb_quote_v2">
                    <div className="media-body">
                      <div className="quote">&ldquo;</div>
                      <blockquote className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</blockquote>
                      <p>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star-half text-warning"></i>
                        <i className="ion-ios-star-outline text-warning"></i>
                      </p>
                      <h3 className="heading">Garry Alexander</h3>
                      <span className="subheading">@garry</span>

                    </div>
                  </div>
                </div>
                <div>
                  <div className="media d-block text-center testimonial_v1 pb_quote_v2">
                    <div className="media-body">
                      <div className="quote">&ldquo;</div>
                      <blockquote className="mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</blockquote>
                      <p>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star-half text-warning"></i>
                        <i className="ion-ios-star-outline text-warning"></i>
                      </p>
                      <h3 className="heading">Deborah Smith</h3>
                      <span className="subheading">@deborah</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="media d-block text-center testimonial_v1 pb_quote_v2">
                    <div className="media-body">
                      <div className="quote">&ldquo;</div>
                      <blockquote className="mb-5">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</blockquote>
                      <p>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star-half text-warning"></i>
                        <i className="ion-ios-star-outline text-warning"></i>
                      </p>
                      <h3 className="heading">James Robertson</h3>
                      <span className="subheading">@james</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="media d-block text-center testimonial_v1 pb_quote_v2">
                    <div className="media-body">
                      <div className="quote">&ldquo;</div>
                      <blockquote className="mb-5">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</blockquote>
                      <p>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star text-warning"></i>
                        <i className="ion-ios-star-half text-warning"></i>
                        <i className="ion-ios-star-outline text-warning"></i>
                      </p>
                      <h3 className="heading">Marie Gibson</h3>
                      <span className="subheading">@marie</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="pb_slider_nav js-pb_slider_nav2">
                    <div className="author">
                      <img className="img-fluid rounded-circle" src="assets/images/person_1.jpg" alt="Generic placeholder image" />
                    </div>
                    <div className="author">
                      <img className="img-fluid rounded-circle" src="assets/images/person_5.jpg" alt="Generic placeholder image" />
                    </div>
                    <div className="author">
                      <img className="img-fluid rounded-circle" src="assets/images/person_2.jpg" alt="Generic placeholder image" />
                    </div>
                    <div className="author">
                      <img className="img-fluid rounded-circle" src="assets/images/person_6.jpg" alt="Generic placeholder image" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const applicationFeaturesSectionTwo = () => {
  return (
    <section className="pb_section bg-light pb_slant-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-2">
            <img src="assets/images/phone_3.png" alt="Image placeholder" className="img-fluid" />
          </div>
          <div className="col-lg-8 pr-md-5 pr-sm-0 order-1  mb-5">
            <div className="row">
              <div className="col">
                <h2>Application Features</h2>
                <p className="pb_font-20">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Minimal Design</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-infinite-outline pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Unlimited Posibilities</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

              </div>
              <div className="col-lg">

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-speedometer-outline pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Fast Loading</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-color-filter-outline  pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Component Based Design</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const applicationFeaturesSection = () => {
  return (
    <section className="pb_section pb_slant-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5">
            <img src="assets/images/phone_3.png" alt="Image placeholder" className="img-fluid" />
          </div>
          <div className="col-lg-8 pl-md-5 pl-sm-0">
            <div className="row">
              <div className="col">
                <h2>Application Features</h2>
                <p className="pb_font-20">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Minimal Design</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-infinite-outline pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Unlimited Posibilities</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

              </div>
              <div className="col-lg">

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-speedometer-outline pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Fast Loading</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

                <div className="media pb_feature-v2 text-left mb-1 mt-5">
                  <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-color-filter-outline  pb_icon-gradient"></i></div>
                  <div className="media-body">
                    <h3 className="mt-2 mb-2 heading">Component Based Design</h3>
                    <p className="text-sans-serif pb_font-16">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const featureSection = () => {
  return (
    <section className="pb_section bg-light pb_slant-white pb_pb-250" id="section-features">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 text-center mb-5">
            <h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>Features!</strong></h5>
            <h2>App Features</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md- col-sm-6">
            <div className="media d-block pb_feature-v1 text-left">
              <div className="pb_icon"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
              <div className="media-body">
                <h5 className="mt-0 mb-3 heading">Minimal Design</h5>
                <p className="text-sans-serif">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md- col-sm-6">
            <div className="media d-block pb_feature-v1 text-left">
              <div className="pb_icon"><i className="ion-ios-speedometer-outline pb_icon-gradient"></i></div>
              <div className="media-body">
                <h5 className="mt-0 mb-3 heading">Fast Loading</h5>
                <p className="text-sans-serif">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md- col-sm-6">
            <div className="media d-block pb_feature-v1 text-left">
              <div className="pb_icon"><i className="ion-ios-infinite-outline pb_icon-gradient"></i></div>
              <div className="media-body">
                <h5 className="mt-0 mb-3 heading">Unlimited Possibilities</h5>
                <p className="text-sans-serif">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md- col-sm-6">
            <div className="media d-block pb_feature-v1 text-left">
              <div className="pb_icon"><i className="ion-ios-color-filter-outline pb_icon-gradient"></i></div>
              <div className="media-body">
                <h5 className="mt-0 mb-3 heading">Component Based Design</h5>
                <p className="text-sans-serif">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md- col-sm-6">
            <div className="media d-block pb_feature-v1 text-left">
              <div className="pb_icon"><i className="ion-ios-wineglass-outline pb_icon-gradient"></i></div>
              <div className="media-body">
                <h5 className="mt-0 mb-3 heading">Clean Code</h5>
                <p className="text-sans-serif">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md- col-sm-6">
            <div className="media d-block pb_feature-v1 text-left">
              <div className="pb_icon"><i className="ion-ios-paperplane-outline pb_icon-gradient"></i></div>
              <div className="media-body">
                <h5 className="mt-0 mb-3 heading">Lightweight</h5>
                <p className="text-sans-serif">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

const sectionOne = () => {
  return (
    <section className="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="heading mb-3">Fly makes you faster</h2>
            <div className="sub-heading">
              <p className="mb-4">New free template by <a href="http://uicookies.com" target="_blank">uicookies.com</a>. For more templates visit the <a href="http://uicookies.com" target="_blank">site</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p className="mb-5"><a className="btn btn-success btn-lg pb_btn-pill smoothscroll" href="#section-pricing"><span className="pb_font-14 text-uppercase pb_letter-spacing-1">See Pricing</span></a></p>
            </div>
          </div>
          <div className="col-md-1">
          </div>
        </div>
      </div>
    </section>
  );
}

const SignUp = () => {
  return (
    <div className="col-md-5 relative align-self-center">

    <form action="#" className="bg-white rounded pb_form_v1">
      <h2 className="mb-4 mt-0 text-center">Sign Up for Free</h2>
      <div className="form-group">
        <input type="text" className="form-control pb_height-50 reverse" placeholder="Full name" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control pb_height-50 reverse" placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control pb_height-50 reverse" placeholder="Email" />
      </div>
      <div className="form-group">
        <div className="pb_select-wrap">
          <select className="form-control pb_height-50 reverse">
            <option value="" selected>Type</option>
            <option value="">Basic</option>
            <option value="">Business</option>
            <option value="">Free</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Register" />
      </div>
    </form>

  </div>
  );
}
