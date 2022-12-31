import 'isomorphic-fetch';
import exampleData from './exampleData';

const staysSearch = async (city: string, state: string, stateCode: string) => {
    const res = await fetch("https://www.airbnb.com/api/v3/StaysSearch?operationName=StaysSearch&locale=en&currency=USD", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Brave\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "x-airbnb-api-key": "d306zoyjsyarp7ifhu67rjxn52tv0t20",
            "x-airbnb-graphql-platform": "web",
            "cookie": "everest_cookie=1667673495.Iq7DpPli3wMXwRegDFCN.yV8_sdCrIie42N5FpOEc01Ffwq1B0uDYT_6cp0YsMrY; country=US;",
            "Referer": `https://www.airbnb.com/s/${city}--${stateCode}--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=5&query=${city}%2C%20${stateCode}`,
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{\"operationName\":\"StaysSearch\",\"variables\":{\"isInitialLoad\":true,\"hasLoggedIn\":false,\"cdnCacheSafe\":false,\"source\":\"EXPLORE\",\"staysSearchRequest\":{\"requestedPageType\":\"STAYS_SEARCH\",\"metadataOnly\":false,\"source\":\"structured_search_input_header\",\"searchType\":\"autocomplete_click\",\"treatmentFlags\":[\"decompose_stays_search_m2_treatment\",\"flex_destinations_june_2021_launch_web_treatment\",\"new_filter_bar_v2_fm_header\",\"new_filter_bar_v2_and_fm_treatment\",\"merch_header_breakpoint_expansion_web\",\"flexible_dates_12_month_lead_time\",\"storefronts_nov23_2021_homepage_web_treatment\",\"lazy_load_flex_search_map_compact\",\"lazy_load_flex_search_map_wide\",\"im_flexible_may_2022_treatment\",\"im_flexible_may_2022_treatment\",\"flex_v2_review_counts_treatment\",\"search_add_category_bar_ui_ranking_web\",\"p2_grid_updates_web_v2\",\"flexible_dates_options_extend_one_three_seven_days\",\"super_date_flexibility\",\"micro_flex_improvements\",\"micro_flex_show_by_default\",\"search_input_placeholder_phrases\",\"pets_fee_treatment\"],\"rawParams\":[{\"filterName\":\"cdnCacheSafe\",\"filterValues\":[\"false\"]},{\"filterName\":\"datePickerType\",\"filterValues\":[\"calendar\"]},{\"filterName\":\"flexibleTripLengths\",\"filterValues\":[\"one_week\"]},{\"filterName\":\"hasLoggedIn\",\"filterValues\":[\"false\"]},{\"filterName\":\"isInitialLoad\",\"filterValues\":[\"true\"]},{\"filterName\":\"itemsPerGrid\",\"filterValues\":[\"18\"]},{\"filterName\":\"placeId\",\"filterValues\":[\"ChIJRZdD6h5-1YcR_rYaYBXzk9E\"]},{\"filterName\":\"priceFilterInputType\",\"filterValues\":[\"0\"]},{\"filterName\":\"priceFilterNumNights\",\"filterValues\":[\"5\"]},{\"filterName\":\"query\",\"filterValues\":[\"${city}, ${stateCode}\"]},{\"filterName\":\"refinementPaths\",\"filterValues\":[\"/homes\"]},{\"filterName\":\"screenSize\",\"filterValues\":[\"large\"]},{\"filterName\":\"tabId\",\"filterValues\":[\"home_tab\"]},{\"filterName\":\"version\",\"filterValues\":[\"1.8.3\"]}]},\"staysSearchM3Enabled\":false,\"staysSearchM6Enabled\":false,\"feedMapDecoupleEnabled\":false},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"72906bd6e5a6f41a04b391adadfb287106ea9209c6a2078d82d6568310d143e7\"}}}`,
        "method": "POST"
    });
    console.log('running')
    const data = await res.json();
    return data;
}

const calendarSearch = async (id: string) => {
    const res = await fetch(`https://www.airbnb.com/api/v3/PdpAvailabilityCalendar?operationName=PdpAvailabilityCalendar&locale=en&currency=USD&variables=%7B%22request%22%3A%7B%22count%22%3A12%2C%22listingId%22%3A%22${id}%22%2C%22month%22%3A12%2C%22year%22%3A2022%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%228f08e03c7bd16fcad3c92a3592c19a8b559a0d0855a84028d1163d4733ed9ade%22%7D%7D`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Brave\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-airbnb-api-key": "d306zoyjsyarp7ifhu67rjxn52tv0t20",
            "x-airbnb-graphql-platform": "web",
            "x-airbnb-graphql-platform-client": "minimalist-niobe",
            "x-airbnb-supports-airlock-v2": "true",
            "x-client-request-id": "0p95h220rvbnjc1l5o00k0simgtw",
            "x-csrf-token": "V4$.airbnb.com$sRKuo3ShQHc$R3uM1c8ui_tNFYSJtpAZdSTMBCleZQ_8I6DPYguwLXM=",
            "x-csrf-without-token": "1",
            "x-niobe-short-circuited": "true",
            "cookie": `everest_cookie=1667673495.Iq7DpPli3wMXwRegDFCN.yV8_sdCrIie42N5FpOEc01Ffwq1B0uDYT_6cp0YsMrY; country=US; cdn_exp_2ab78baeda6c3fe9c=treatment; bev=1667673495_ODUyMGNjMDdhYjVi; OptanonAlertBoxClosed=NR; cdn_exp_e34f8847ee4f0c14f=treatment; _csrf_token=V4%24.airbnb.com%24sRKuo3ShQHc%24R3uM1c8ui_tNFYSJtpAZdSTMBCleZQ_8I6DPYguwLXM%3D; _airbed_session_id=312d023ed5e0d0eb1bd1e57d87f590bb; sticky_locale=en; cdn_exp_9cbf277ff04e35316=treatment; cdn_exp_759647797802a2888=treatment; auth_jitney_session_id=8b3e65fd-8a30-4742-98fd-e2d3a46eab11; cdn_exp_7d88e310aadc73d9b=treatment; cdn_exp_875ac2fa405b6da87=control; flags=0; tzo=-360; _gcl_au=1.1.185822587.1672258873; _ga=GA1.1.889301866.1672258874; cfrmfctr=DESKTOP; frmfctr=wide; cbkp=4; _uetsid=76aaf2c087d011edb2d6dbbfe5218141; _uetvid=2ce5247086ed11eda3bb216922d41d86; jitney_client_session_id=71baf558-d605-493f-82eb-ed7b4296a6a0; jitney_client_session_created_at=1672363395; ak_bmsc=EF3696E0FD4BA8CD99E58BABD2EA2E31~000000000000000000000000000000~YAAQB8pNF0SIK1+FAQAAaFCgYBJIAi3kmAbba+IDpm+fJTwgbgh9Ymwof+yKDmFqWzLQZgI4kmn4iMRmBbsKeIX+o67CG3HZKCmjhhrQ38VSiRS9IPg53VBWSPj1FzjMkZq+cXH3Wm6MXyPr9LapJilCe/fSswLX0sB4Sd+x+PVGcO4ukQBNZMN0GRfA3c7N8gY60ajsUh03RtDT70E5su8rZwuxBsFr6tS9aasga1weAL58QynCSGXLRg65QVfjpKScGzWj7TYq+gUhauEmTTDi0eSc67pYbU2qoHCOpOhyPU3C0XZmtWbyxr65vnVBGjQ7DcCIfvuFDUUBMBIxTCWIZcJQzBSo+tOlbHepxzvxkA+ki4RfXgvnMgk=; previousTab=%7B%22id%22%3A%220d8727c2-6458-4d72-b6cd-258082b42900%22%2C%22url%22%3A%22https%3A%2F%2Fwww.airbnb.com%2Frooms%2F${id}%3Fadults%3D1%26children%3D0%26infants%3D0%26pets%3D0%26check_in%3D2023-01-15%26check_out%3D2023-01-20%26source_impression_id%3Dp3_1672363396_UDTEHGeCD8MwvNfT%22%7D; _user_attributes=%7B%22enable_auto_translate%22%3Afalse%2C%22guest_exchange%22%3A1%2C%22device_profiling_session_id%22%3A%221667673495--9b020724e09e0e62cbbd3ca4%22%2C%22giftcard_profiling_session_id%22%3A%221672363395--a2a62573dd7bafcf40edf4b2%22%2C%22reservation_profiling_session_id%22%3A%221672363395--58e0b74704eec4c5eb089ca9%22%2C%22curr%22%3A%22USD%22%7D; jitney_client_session_updated_at=1672363425; bm_sv=AB1FF544F76921DBD5FF6E3A3399C01B~YAAQB8pNF1GNK1+FAQAA+MSgYBICTsFYz3pUf4s+MFTFWhQQejfU928j0xH+rGo/HLkCMQv1GdlpC0Q69FPcWw1T1pRBwPg6ZwHFmB3b3XH0pKUcnOLdnhn73+2OPx91r4e3Lc2qL1Ii/O6n8hvzDLyAQIoARmqVcFNVaElJoS40+GFP6NYHghx5SCo6VAaLUmIUHJ6mBdEw5h5ebaOD0yUfF8Hq15k0VCiPjpmWuOD9PUFFAW90XEkG/G59jHQyOA==~1; _ga_2P6Q8PGG16=GS1.1.1672363428.3.1.1672363428.60.0.0`,
            "Referer": `https://www.airbnb.com/rooms/${id}?adults=1&children=0&infants=0&pets=0&check_in=2023-01-15&check_out=2023-01-20&source_impression_id=p3_1672363396_UDTEHGeCD8MwvNfT`,
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });
    const data = await res.json();
    return data;
}

const main = async () => {
    // const data = exampleData.data;
    const data = await staysSearch('Miami', 'Florida York', 'FL');
    console.log(data);

    const results = data.data.presentation.explore.sections.sectionIndependentData.staysSearch.searchResults;
    // data.presentation.explore.sections.sectionIndependentData.staysSearch.searchResults[5]

    // loop through results and print out the title
    let counter = 0;
    for (let i = 0; i < results.length; i++) {
        const title = results[i].listing.title;
        const id = results[i].listing.id;

        // const res = await calendarSearch(id.toString());
        // const data = await res.json();
        // console.log(data);

        let price = results[i]?.pricingQuote?.structuredStayDisplayPrice?.primaryLine?.price;
        if (price === undefined) {
            price = results[i]?.pricingQuote?.structuredStayDisplayPrice?.primaryLine?.discountedPrice;
        }
        console.log(title, price);
        counter++;
    }
    console.log(counter, 'new');

}

main();

