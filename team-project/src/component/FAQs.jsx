import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

const FAQs = () => {
    return (
        <>
            <div className='component-of-FAQs'>
                <h1 className='text-center mt-5 fw-bolder'>Frequenty Asked Questions</h1>
                <Container className='mt-5 py-5'>
                    <Accordion>
                        <Accordion.Item eventKey="0" className='border-top-0 border-start-0 border-end-0'>
                            <Accordion.Header className='bg-success'>
                                <h5>What Is Included With My Purchase Of Avada?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6>With your purchase of Avada, you will receive:</h6>
                                <ul className='faq-ul'>
                                    <li>&nbsp; 6 months of free professional support.</li>
                                    <li>&nbsp; 8 bundled premium plugins.</li>
                                    <li>&nbsp; 94 prebuilt websites, with new sites released regularly.</li>
                                    <li>&nbsp; 452 prebuilt content items for every occassion, downloadable with just a click.</li>
                                    <li>&nbsp; 550+ detailed help files, continually updated to ensure everything is current.</li>
                                    <li>&nbsp; 200+ video tutorials, with new videos, added regularly.</li>
                                    <li>&nbsp; Free, consistent, and stable updates to ensure compatibility with industry standards & trends.</li>
                                    <li>&nbsp; Avada works with popular 3rd party plugins like Yoast SEO, WooCommerce, The Events Calendar, HubSpot, WPML, and more.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='border-top-0 border-start-0 border-end-0 py-2'>
                            <Accordion.Header>
                                <h5>Are There Any Recurring Fees?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>No, there are no recurring license fees to use Avada. It is a one-time purchase that provides you with lifetime updates at no extra cost and is valid for life. You can choose to purchase a support extension after the initial 6 months of support has expired. However, this is entirely optional.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='border-top-0 border-start-0 border-end-0 py-2'>
                            <Accordion.Header>
                                <h5>Where Can | Get Support?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className='fw-bold'>Hands-on support with our professional team of support experts is accessible 24/7, and that includes an extensive library of detailed documentation and video tutorials.</h6>
                                <ul className='faq-ul'>
                                    <li>&nbsp; To access support you will need to register a support account by following these steps.</li>
                                    <li>&nbsp; Once your support account is set up, you can submit support tickets here.</li>
                                    <li>&nbsp; Learn how to navigate your support account Dashboard here.</li>
                                    <li>&nbsp; Check to see if you are eligible for Grandfathered support.</li>
                                    <li>&nbsp; For a detailed overview of our support policy please go here.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='border-top-0 border-start-0 border-end-0 py-2'>
                            <Accordion.Header>
                                <h5>Are The Prebuilt Websites Fully Customizable?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>Yes, each prebuilt website is 100% customizable. All prebuilt websites are professionally designed by our in-house design team, created to showcase Avada’s capabilities and save you time.</p>

                                <p>Once you import a prebuilt website, you can entirely customize the content and layouts to your liking. You can add your own imagery, change text, change colors or completely change any of the layouts using the Avada Website Builder.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='border-top-0 border-start-0 border-end-0 py-2'>
                            <Accordion.Header>
                                <h5>Why Should I Trust Avada?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className='fw-bold'>
                                    Trust is a quality that we take great care to foster and maintain by building long-term professional relationships
                                    that our customers can rely on. Here are some important qualifiers:
                                </h6>
                                <ul className='faq-ul mt-5'>
                                    <li>&nbsp; The #1 selling Website Builder on Themeforest for 10+ years and counting.</li>
                                    <li>&nbsp; We love what we do and who we do it for. Your future is our focus.</li>
                                    <li>&nbsp; Avada is 100% developed and maintained in-house.</li>
                                    <li>&nbsp; Free, consistent, and stable updates to ensure compatibility with industry standards & trends.</li>
                                    <li>&nbsp; Avada has no dependence on 3rd parties to deliver a stable & seamless website building experience.</li>
                                    <li>&nbsp; 550+ detailed help files, continually updated to ensure everything is current.</li>
                                    <li>&nbsp; 200+ video tutorials, with new videos, added regularly.</li>
                                    <li>&nbsp; Avada works with popular 3rd party plugins like Yoast SEO, WooCommerce, The Events Calendar, HubSpot, WPML, and more.</li>
                                    <li>&nbsp; Years of evolving Avada by listening to our customer’s feedback is what helps shape Avada’s roadmap for the future.</li>
                                    <li>&nbsp; A vast, passionate community of Avada customers drives a well-established Facebook group and a community forum.</li>
                                    <li>&nbsp; Join 896,030 passionate Avada customers and build your future.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </>
    )
}

export default FAQs