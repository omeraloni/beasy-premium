module.exports.lookingFor = () => {
    return ({
        saveAs: "lookingFor",
        ranges: [
            {
                value: 'StrategicPartnerships',
                label: 'Strategic Partnerships',
            },
            {
                value: 'CoMarketingCampaign',
                label: 'Co-Marketing Campaign',
            },
            {
                value: 'BusinessDevelopment',
                label: 'Business Development ',
            },
            {
                value: 'Other',
                label: 'Other',
            }
        ],
        title: "matchmaker.looking-for",
        adornment: ""
    });
}

module.exports.goals = () => {
    return ({
        saveAs: "goals",
        ranges: [
            {
                value: 'NewProduct',
                label: 'Launch a New Product',
            },
            {
                value: 'CreateServiceProduct',
                label: 'Create service/product',
            },
            {
                value: 'GenerateValue',
                label: 'Generate value',
            },
            {
                value: 'PotentialCustomers',
                label: 'Exposure to potential customers',
            },
            {
                value: 'NewAudience ',
                label: 'Target a new Audience ',
            },
            {
                value: 'CreateContent',
                label: 'Create Content',
            },
            {
                value: 'SocialNetwork ',
                label: 'Grow on social network ',
            },
            {
                value: 'GenerateLeads',
                label: 'Generate Leads',
            },
            {
                value: 'UserAcquisition',
                label: 'User/Customer Acquisition',
            },
            {
                value: 'Publicity',
                label: 'Publicity',
            },
            {
                value: 'Other',
                label: 'Other',
            }
        ],
        title: "matchmaker.what-is-your-goal",
        adornment: ""
    });
}

module.exports.how = () => {
    return ({
        saveAs: "how",
        ranges: [
            {
                value: 'SocialMarketingPromotion',
                label: 'Social Marketing Promotion'
            },
            {
                value: 'BusinessDevelopmentPartnership',
                label: 'Business Development Partnership'
            },
         
            {
                value: 'ProductLineDesign',
                label: 'Product Line Design'
            },
            {
                value: 'InfluencersCampaign',
                label: 'Influencers Campaign',
            },
            {
                value: 'TraditionalMarketing',
                label: 'Traditional Marketing',
            },
            {
                value: 'CrossPromotionCampaign',
                label: 'Cross Promotion Campaign',
            },
            {
                value: 'RunningEvent',
                label: 'Running an Event',
            },
            {
                value: 'ExposureEvent',
                label: 'Exposure at Event',
            },
            {
                value: 'BecomeSponsor',
                label: 'Become a Sponsor',
            },
            {
                value: 'Other',
                label: 'Other',
            }
        ],
        title: "matchmaker.how",
        adornment: ""
    });
}

module.exports.where = () => {
    return ({
        saveAs: "where",
        ranges: [
            {
                value: 'IL',
                label: 'Israel',
            },
            {
                value: 'UK',
                label: 'England',
            },
        ],
        title: "matchmaker.where",
        adornment: ""
    });
}

module.exports.achieve = () => {
    return ({
        saveAs: "achieve",
        ranges: [
            {
                value: 'BrandAwareness',
                label: 'Brand Awareness'
            },
            {
                value: 'BrandImage',
                label: 'Brand Image',
            },
            {
                value: 'IncreaseSales',
                label: 'Increase Sales',
            },
            {
                value: 'IncreaseCostumerLoyality',
                label: "Increase Costumer's Loyality",
            },
            {
                value: 'Other',
                label: 'Other',
            },
        ],
        title: "matchmaker.achieve",
        error: "Please check at least 1 achievement",
        adornment: ""
    });
}

module.exports.gender = () => {
    return ({
        saveAs: "gender",
        ranges: [
            {
                value: 'Male',
                label: 'Male',
            },
            {
                value: 'Female',
                label: 'Female',
            },
        ],
        title: "matchmaker.gender",
        adornment: ""
    });
}

module.exports.budget = () => {
    return ({
        saveAs: "budget",
        min: 100,
        max: 50000,
        defaultMin: 1000,
        defaultMax: 10000,
        title: "matchmaker.budget",
        isDollar: true,
        adornment: "",
        step: 100
    });
}

module.exports.age = () => {
    return ({
        saveAs: "age",
        min: 0,
        max: 120,
        defaultMin: 18,
        defaultMax: 35,
        title: "matchmaker.age",
        isDollar: false,
        adornment: "",
        step: 1
    });
}

const interests = () => {

}

module.exports.interest = () => {
    return ({
        saveAs: "interests",
        ranges: [
            {
                value: 'Fashion',
                label: 'Fashion'
            },
            {
                value: 'Lifestyle',
                label: 'Lifestyle',
            },
            {
                value: 'Entertainment',
                label: 'Entertainment',
            },
            {
                value: 'Music',
                label: "Music",
            },
            {
                value: 'OutdoorActivity',
                label: 'Outdoor Activity',
            },
            {
                value: 'Sport',
                label: 'Sport',
            },
            {
                value: 'Beauty',
                label: 'Beauty',
            },
            {
                value: 'ArtInfluencer',
                label: 'Art Influencer',
            },
            {
                value: 'Surfing',
                label: 'Surfing',
            },
            {
                value: 'Sustainability',
                label: 'Sustainability',
            },
            {
                value: 'Fun',
                label: 'Fun',
            },
            {
                value: 'ExtremeSport',
                label: 'Extreme Sport',
            },
            {
                value: 'Games',
                label: 'Games',
            },
            {
                value: 'Beach',
                label: 'Beach',
            },
            {
                value: 'Fitness',
                label: 'Fitness',
            },
            {
                value: 'Event',
                label: 'Event',
            },
            {
                value: 'EcoFriendly',
                label: 'Eco-Friendly',
            },
            {
                value: 'AnimalFriendly',
                label: 'Animal-Friendly',
            },
            {
                value: 'Healing',
                label: 'Healing',
            },
            {
                value: 'Yoga',
                label: 'Yoga',
            },
            {
                value: 'Wellness',
                label: 'Wellness',
            },
            {
                value: 'Party',
                label: 'Party',
            },
            {
                value: 'Creation',
                label: 'Creation',
            },
        ],
        title: "opp.interests",
        error: "",
        adornment: ""
    });
}
