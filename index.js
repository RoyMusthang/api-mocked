const express = require('express');
const cors = require('cors');
const ui = require('.');

const app = express()
const PORT = 3001;

// middlewares de requisição
app.use(express.json());
app.use(cors({
  origin: '*',
}));

// middlewares de resposta
app.get('/term', (_, res) => {
  res.json({
    title: {
      titleOne: "Anonymous questionnaire",
      titleTwo: "Without any influence of brands"
    },
    main: {
      mainPara1: "This product is not intended to diagnose, treat, cure. By using Nutripoint you indicate that you accept the",
      mainTerm: " terms of use.",
      mainPara2: "No name or email you will be asked in the questionnaire."
    },
    footer: {
      btnDec: "Decline",
      btnAcc: "Accept"
    }
  })
});

app.get('/term-modal', (_, res) => {
  res.json({
    title: "TERMS AND CONDITIONS FOR NUTRIPOINT USERS",
    footer: {
      btnDec: "Decline",
      btnAcc: "Accept"
    },
    articles: [
      "Article 1. Object:",
      "Article 2. Program Description:",
      "Article 3. Access to the:",
      "Article 4. How the NUTRIPOINT Program works:",
      "Article 5. Complete nutritional assessment:",
      "Article 6. Obligation of users:",
      "Article 7. Prohibited behaviour:",
      "Article 8. Liability and guarantee of the Supplierk:",
      "Article 9. Personal data:",
      "Article 10. Droit applicable:",
      "Article 11. User Acceptance:"
    ],
    description: {
      Object: [
        "The purpose of these general conditions of use isto define the terms and conditions of use of the services offered by PHYSIOQUANTA ('The Supplier') within the framework of the NUTRIPOINT program.",
        "The User (The Customer) expressly acknowledges having read these general conditions of use before any use of the program.",
        "These conditions apply to the exclusion of all other conditions, and in particular those applicable for other marketing channels of the Services or on the Internet.",
        "These General Terms and Conditions of Use are systematically communicated to any Customer before using the NUTRIPOINT program.",
        "The Customer declares to have read these General Terms and Conditions of Use and to have accepted them before using the program and this without restriction or reservation.",
        "These General Terms and Conditions of Use may be subject to subsequent modifications, the version applicable to the use of the Customer is the one in force on the day of the conclusion of the contract.",
        "The Contact Details of the Service Provider are as follows:",
        "Nutripoint – Physioquanta\\n 1 rue de la Garrigue\\n 34130 MUDAISON"
      ],
      ProgramDescription: [
        "The purpose of the NUTRIPOINT solution is to advise Users on their needs for dietary products, phytotherapies and/or food supplements sold in pharmacies through an electronic questionnaire carried out on the touch terminal installed in the pharmacy.",
        "The questionnaire carried out by the Customer will make it possible to establish a nutritional assessment and to determine the dietary products, phytotherapies and / or food supplements best suited to the needs of the Customers.",
        "The recommendations take into account the symptoms, lifestyle, diet, drug treatments, allergies, biomedical analysis results and the air/UV quality of the Customer's environment.",
        "The assessment is carried out by cross-referencing the data provided by the Client and the information available in thousands of international scientific publications relating to the issue.",
        "The  NUTRIPOINT program is a simple counselling tool and cannot be used for the purpose of diagnosis, treatment, cure or prevention of medical pathology.",
        "It can in no way replace medical advice."
      ],
      AccessToThe: [
        "The NUTRIPOINT solution is accessible: ",
        "To any natural person with full legal capacity to undertake under these general conditions. A natural person who does not have full legal capacity may only access the Services with the consent of his or her legal representative.",
        "To any legal person acting through a natural person with the legal capacity to contract in the name and on behalf of the legal person."
      ],
      HowTheNUTRIPOINTProgramWorks: [
        "The Customer carries out an assessment of his nutritional needs by completing the questionnaire on the touch screen of the self-service electronic terminal in a pharmacy or on the website of partner pharmacies.",
        "The data provided relate to the symptoms, lifestyle, diet, drug treatments, allergies, biomedical analysis results and air/UV quality of the Customer's environment.",
        "At the end of the questionnaire, the Customer will be able to access a free nutritional assessment presenting a selection of nutrients and foods necessary for the Nutritional Balance of the Customer as well as advice relating to the products present in the pharmacy and adapted to the Needs of the Customer established by the questionnaire.",
        "The balance sheet will be accessible with the QR ticket issued by the terminal or by e-mail if the Customer agrees to give his e-mail address."
      ],
      CompleteNutritionalAssessment: [
        "The Customer also  has the possibility to subscribe directly in the pharmacy on the electronic terminal, or at the checkout with the pharmacist or on the website 'www.nutripoint.fr' to a paid offer allowing him  to access a complete nutritional assessment  presenting a wider selection of nutrients and foods necessary for the Nutritional Balance of the Customer, a detailed presentation of the latter, dietary advice, as well as advice relating to the products present in the pharmacy and adapted to the Needs of the Customer established by the questionnaire.",
        "The cost of the complete nutritional assessment amounts to nine euros and ninety to be paid according to the following terms:",
        "By any means of payment at the convenience of the pharmacist.",
        "or",
        "By credit card on the 'www.nutripoint.fr' website"
      ],
      ObligationOfUsers: [
        "Without prejudice to the other obligations provided for herein, Users undertake to comply with the following obligations.",
        "6-1. Users undertake, in their use of Nutripoint services, to comply with the laws and regulations in force and not to infringe the rights of third parties or public order.",
        "6-2. Users acknowledge that they have read the functionalities of the NUTRIPOINT solution and the conditions of use of the services.",
        "They are solely responsible for their use of the services."
      ],
      ProhibitedBehaviour: [
        "7-1. It is strictly forbidden to use the Services for the following purposes:",
        "Exercise of illegal, fraudulent activities or infringing the rights or safety of third parties;",
        "Breach of public order or violation of applicable laws and regulations;",
        "Sending unsolicited emails and/or prospecting or commercial solicitation,",
        "Manipulations intended to improve the referencing of a third-party site;",
        "More generally, any practice diverting the Services for purposes other than those for which they were designed.",
        "7-2. Users are strictly prohibited from copying and/or misappropriating for their own purposes or those of third parties the concept, technologies, all or part of the data or any other element of the NUTRIPOINT program."
      ],
      LiabilityAndGuaranteeOfTheSupplier: [
        "8-1. The Supplier undertakes to provide the services diligently and according to the rules of the art, it being specified that it weighs on it an obligation of means, to the exclusion of any obligation of result, which the Customers expressly acknowledge and accept.",
        "The services provided have the sole purpose of providing assistance to the Customer in the choice of dietary products, phytotherapies and / or food supplements through the establishment of a dietary assessment and all the information found in international scientific publications.",
        "8-2. In this regard, Users expressly acknowledge and accept that:",
        "The recommendations provided via the NUTRIPOINT solution are not provided by a pharmacist, a doctor or any other health professional, but are built by means of an artificial intelligence tool allowing the search and census of information available in official sources.",
        "8-3. The information provided by the NUTRIPOINT programme comes from scientific data, publications and case studies and the interpretations made of them.",
        "With regard to the composition of the products, the Supplier uses the information provided by the manufacturer. The Supplier cannot be held responsible in the event of incorrect composition.",
        "To this end, the answers provided are in no way intended to promote a pharmaceutical laboratory.",
        "Only objective information relating to the composition of the products shall be taken into account in establishing the classification of the products.",
        "8-4. The services, subject to constant research to improve performance and progress, will be completely free of errors, defects or defects.",
        "In any event, the liability that may be incurred by the Supplier hereunder is expressly limited to proven direct damage suffered by customers."
      ],
      SupplierIsInterllectualProperty: [
        "The systems, software, structures, infrastructures, databases and content of any kind operated by the supplier within the NUTRIPOINT solution are protected by any intellectual property rights or rights of database producers in force. All disassembly, decompilations, decryptions, extractions, reuses, copies and more generally, all acts of reproduction, representation, dissemination and use of any of these elements, in whole or in part, without the authorization of the Supplier are strictly prohibited and may be subject to legal proceedings."
      ],
      PersonalData: [
        "To obtain its results by e-mail, the Customer must give his e-mail address which will be processed according to the following provisions.",
        "The personal data collected from Subscribers are subject to computer processing carried out by the Supplier. They are recorded in his Customers file and are essential for the processing of his order. This information and personal data is also kept for security purposes, in order to comply with legal and regulatory obligations. They will be kept for as long as necessary for the execution of orders and any applicable guarantees.",
        "The data controller is the Provider.",
        "Access to personal data will be strictly limited to employees of the controller, who are entitled to process them due to their duties. The information collected may possibly be communicated to third parties linked to the company by contract for the performance of subcontracted tasks, without the user's authorization being necessary.",
        "As part of the performance of their services, third parties have only limited access to the data and are obliged to use them in accordance with the provisions of the applicable legislation on the protection of personal data. Apart from the cases set out above, the Provider is prohibited from selling, renting, assigning or giving access to third parties to the data without the prior consent of the User, unless compelled to do so for a legitimate reason.",
        "unless compelled to do so for a legitimate reason.",
        "If the data is to be transferred outside the EU, the Customer will be informed and the guarantees taken to secure the data (for example, membership of the external service provider in the 'Privacy Shield', adoption of standard protection clauses validated by the CNIL, adoption of a code of conduct, obtaining a CNIL certification, etc.) will be specified.",
        "In accordance with the applicable regulations, the User has a right of access, rectification, erasure, and portability of data concerning him, as well as the right to oppose the processing for legitimate reasons, rights that he can exercise by contacting the controller at the following postal or email address:",
        "Mailing address:\\n Nutripoint- Physioquanta\\n 1rue de la Garigue 34130 Mudaison ",
        "Address mail:\\n hello@nutripoint.io",
        "In the event of a complaint, the User may submit a complaint to the Commission Nationale de l'Informatique et des Libertés."
      ],
      DroitApplicable: [
        "These General Terms and Conditions are governed by French law. They are written in French. In the event that they are translated into one or more languages, only the French text shall prevail in the event of a dispute."
      ],
      UserAcceptance: [
        "These General Terms and Conditions are expressly approved and accepted by the User, who declares and acknowledges having perfect knowledge of them, and therefore renounces to rely on any contradictory document that will be unenforceable against the Supplier, even if he has been aware of it."
      ]
    }
  })
});

app.get('/gender', (_, res) => {
  res.json({
    title: "You are?",
    man: {
      alt: "man",
      quest: "A Man"
    },
    woman: {
      alt: "woman",
      quest: "A Woman"
    },
    footer: "Previous"
  })
})

app.get('/pregnant', (_, res) => {
  res.json({
    title: 'Are you currently pregnant?',
    answers: {
      yes: 'Yes',
      no: 'No',
    },
    footer: 'Previous'
  })
})

app.get('/pregnant-modal', (_, res) => {
  res.json({
    title: 'Coming soon',
    article: [
      'Nutripoint assessment in not available yet for pregnant woman.',
      'The Nutripoint team is currently working hard to deliver it to you as soon as possible.'
    ],
    footer: 'Home Page'
  })
})

app.get('/age', (_, res) => {
  res.json({
    title: 'How old are you?',
    error: 'Incorrect Value',
    footer: {
      btnDec: "Previous",
      btnAcc: "Next"
    }
  })
})

app.get('/height', (_, res) => {
  res.json({
    title: 'What is your height?',
    error: 'Fill In The Field',
    measurements: [
      'cm',
      'inch',
    ],
    footer: {
      btnDec: "Previous",
      btnAcc: "Next"
    }
  })
})

app.get('/weight', (_, res) => {
  res.json({
    title: 'What is your weight?',
    error: 'Incorrect Value',
    measurements: [
      'kg',
      'lbs',
    ],
    footer: {
      btnDec: "Previous",
      btnAcc: "Next"
    }
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
