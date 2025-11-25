export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  description?: string;
  fullDescription?: string;
  keyFeatures?: string[];
  ingredients?: string[];
  howToUse?: string[];
  skinType?: string;
  benefits?: string[];
}

export const products: Product[] = [
  // Skincare Products
  {
    id: 1,
    name: 'Medicube Zero Pore Pads 2.0',
    price: 27.00,
    rating: 4.9,
    reviews: 3456,
    image: '/skincare/Medicube.webp',
    badge: 'Bestseller',
    category: 'skincare',
    description: 'Dual-sided exfoliating pads that target enlarged pores and excess sebum for clearer, smoother skin.',
    fullDescription: 'Medicube Zero Pore Pads 2.0 are innovative dual-textured toner pads designed to minimize pores, control excess sebum, and gently exfoliate dead skin cells. The embossed side provides physical exfoliation while the smooth side delivers active ingredients deep into the skin.',
    keyFeatures: [
      'Dual-sided exfoliating pads for deep pore cleansing',
      'Contains AHA, BHA, and PHA for gentle multi-level exfoliation',
      'Helps reduce pore size and control sebum production',
      'Niacinamide brightens and evens skin tone',
      'Travel-friendly individual packaging',
      'Suitable for oily and combination skin types'
    ],
    ingredients: ['Niacinamide', 'AHA (Glycolic Acid)', 'BHA (Salicylic Acid)', 'PHA (Gluconolactone)', 'Tea Tree Extract', 'Centella Asiatica'],
    howToUse: [
      'After cleansing, gently wipe the embossed side across your face',
      'Flip the pad and use the smooth side to gently pat remaining essence into skin',
      'Continue with the rest of your skincare routine',
      'Use 2-3 times per week for sensitive skin, daily for oily skin'
    ],
    skinType: 'Oily, Combination, Acne-Prone',
    benefits: ['Minimizes pores', 'Controls oil', 'Exfoliates gently', 'Brightens skin', 'Prevents breakouts']
  },
  {
    id: 2,
    name: 'BIODANCE Bio-Collagen Real Deep Mask',
    price: 32.00,
    rating: 4.8,
    reviews: 2891,
    image: '/skincare/BIODANCE.jpg',
    badge: 'Featured',
    category: 'skincare',
    description: 'Overnight hydrating gel mask with ultra-low molecular collagen for deep skin penetration and plumping.',
    fullDescription: 'The BIODANCE Bio-Collagen Real Deep Mask is a revolutionary overnight mask that uses oligo-hyaluronic acid and ultra-low molecular collagen to provide intense hydration and improve skin elasticity. The unique gel-to-water texture absorbs quickly while you sleep.',
    keyFeatures: [
      'Oligo-Hyaluronic Acid for deep, lasting hydration',
      'Ultra-low molecular collagen penetrates deeply',
      'Overnight hydrating gel mask',
      'Improves skin elasticity and firmness',
      'Non-sticky, breathable formula',
      'Suitable for all skin types including sensitive'
    ],
    ingredients: ['Oligo-Hyaluronic Acid', 'Low Molecular Collagen', 'Niacinamide', 'Probiotics', 'Ceramides', 'Panthenol'],
    howToUse: [
      'Apply as the last step of your evening skincare routine',
      'Use the included spatula to apply a generous layer',
      'Leave on overnight and rinse off in the morning',
      'Use 2-3 times per week or as needed'
    ],
    skinType: 'All Skin Types, Dry, Dehydrated',
    benefits: ['Deep hydration', 'Plumps skin', 'Improves elasticity', 'Strengthens barrier', 'Reduces fine lines']
  },
  {
    id: 3,
    name: 'medicube Collagen Jelly Cream',
    price: 29.00,
    rating: 4.7,
    reviews: 1967,
    image: '/skincare/medicube.avif',
    category: 'skincare',
    description: 'Lightweight jelly cream with low molecular collagen that absorbs quickly for all-day hydration.',
    fullDescription: 'medicube Collagen Jelly Cream features a unique bouncy jelly texture that melts into skin, delivering low molecular weight collagen for better absorption. This innovative moisturizer provides long-lasting hydration without feeling heavy or greasy.',
    keyFeatures: [
      'Lightweight jelly texture absorbs instantly',
      'Low molecular collagen for superior absorption',
      'Provides long-lasting hydration throughout the day',
      'Strengthens skin barrier function',
      'Non-greasy formula perfect for layering',
      'Contains peptides for anti-aging benefits'
    ],
    ingredients: ['Low Molecular Collagen', 'Peptide Complex', 'Hyaluronic Acid', 'Ceramide NP', 'Madecassoside', 'Adenosine'],
    howToUse: [
      'Apply after toner and serum',
      'Take an appropriate amount and warm between palms',
      'Gently press into face and neck',
      'Can be used morning and evening'
    ],
    skinType: 'All Skin Types, Normal, Combination',
    benefits: ['Lightweight hydration', 'Improves elasticity', 'Strengthens barrier', 'Anti-aging', 'Non-greasy finish']
  },
  {
    id: 4,
    name: 'medicube Collagen Overnight Wrapping Peel Off Facial Mask Pack',
    price: 35.00,
    rating: 4.8,
    reviews: 1534,
    image: '/skincare/medicube-mask.jpg',
    badge: 'New',
    category: 'skincare',
    description: 'Intensive overnight peel-off mask that locks in moisture and boosts collagen for radiant morning skin.',
    fullDescription: 'This innovative overnight wrapping mask creates a protective film on your skin that locks in active ingredients while you sleep. The peel-off formula is infused with collagen and hydrating ingredients for visibly plumper, more radiant skin by morning.',
    keyFeatures: [
      'Overnight intensive treatment that works while you sleep',
      'Peel-off formula locks in moisture and actives',
      'Collagen booster for anti-aging benefits',
      'Improves skin texture and radiance',
      'Creates a protective moisture barrier',
      'Wake up to plump, glowing skin'
    ],
    ingredients: ['Hydrolyzed Collagen', 'Niacinamide', 'Peptide Complex', 'Hyaluronic Acid', 'Adenosine', 'Vitamin E'],
    howToUse: [
      'Apply as the final step of your PM routine',
      'Apply a thick, even layer avoiding eyes and lips',
      'Leave on overnight (8-10 hours)',
      'Gently peel off in the morning and rinse',
      'Use 1-2 times per week'
    ],
    skinType: 'All Skin Types, Aging, Dull',
    benefits: ['Intensive hydration', 'Boosts collagen', 'Brightens complexion', 'Reduces fine lines', 'Firms skin']
  },
  {
    id: 5,
    name: 'Mighty Patch™ Original from Hero Cosmetics',
    price: 12.99,
    rating: 4.9,
    reviews: 5234,
    image: '/skincare/Mighty-Patch.jpg',
    badge: 'Popular',
    category: 'skincare',
    description: 'Award-winning hydrocolloid patches that absorb pimple gunk overnight for clearer skin by morning.',
    fullDescription: 'Mighty Patch Original uses medical-grade hydrocolloid technology to absorb fluid from blemishes, protecting them from picking and external irritants. These transparent patches work overnight to flatten spots while you sleep, with visible results by morning.',
    keyFeatures: [
      'Medical-grade hydrocolloid technology',
      'Absorbs pimple fluid and impurities overnight',
      'Clinically tested and dermatologist approved',
      'Drug-free and gentle on sensitive skin',
      'Variety of sizes for different spots',
      'Nearly invisible and stays on securely'
    ],
    ingredients: ['Hydrocolloid (Medical-grade)', 'No harsh chemicals', 'No fragrances', 'Vegan & Cruelty-free'],
    howToUse: [
      'Cleanse and dry the affected area completely',
      'Apply patch directly onto the blemish',
      'Leave on for at least 6 hours or overnight',
      'Remove patch and dispose',
      'Patch will turn white when it has absorbed fluid'
    ],
    skinType: 'All Skin Types, Acne-Prone',
    benefits: ['Reduces blemishes overnight', 'Prevents picking', 'Protects from bacteria', 'Drug-free solution', 'Visible results']
  },
  {
    id: 6,
    name: 'eos Shea Better Body Lotion Vanilla Cashmere',
    price: 8.99,
    rating: 4.6,
    reviews: 3789,
    image: '/skincare/eos.webp',
    category: 'skincare',
    description: '24-hour moisture body lotion with natural shea butter and warm vanilla cashmere scent.',
    fullDescription: 'eos Shea Better Body Lotion delivers 24-hour moisture with a luxurious blend of natural shea butter and shea oil. The fast-absorbing, non-greasy formula leaves skin soft and smooth with a warm, comforting vanilla cashmere fragrance.',
    keyFeatures: [
      '24-hour deep moisture with natural shea butter',
      'Warm vanilla cashmere fragrance',
      'Fast-absorbing, non-greasy formula',
      'Dermatologist-tested and hypoallergenic',
      'Made with natural and sustainable ingredients',
      'Gluten-free and paraben-free'
    ],
    ingredients: ['Natural Shea Butter', 'Shea Oil', 'Natural Vanilla Extract', 'Glycerin', 'Vitamin E', 'Cocoa Butter'],
    howToUse: [
      'Apply generously to clean, dry skin',
      'Massage in circular motions until fully absorbed',
      'Use daily or as needed for soft skin',
      'Best applied after shower or bath'
    ],
    skinType: 'All Skin Types, Dry Skin',
    benefits: ['24-hour hydration', 'Soft, smooth skin', 'Pleasant fragrance', 'Non-greasy', 'Natural ingredients']
  },

  // Hair Care Products
  {
    id: 7,
    name: 'CHI 44 Iron Guard Thermal Protection Spray',
    price: 16.99,
    rating: 4.7,
    reviews: 2341,
    image: '/haircare/chi.jpeg',
    badge: 'Bestseller',
    category: 'haircare',
    description: 'Professional heat protectant spray shields hair up to 450°F while adding shine.',
    fullDescription: 'CHI 44 Iron Guard Thermal Protection Spray is a professional-grade heat protectant that creates an invisible shield around each hair strand. Formulated with silk proteins and ceramic compounds, it protects hair from thermal damage up to 450°F while adding brilliant shine and reducing frizz.',
    keyFeatures: [
      'Thermal protection up to 450°F (232°C)',
      'Contains silk proteins and ceramic compounds',
      'Adds brilliant shine and controls frizz',
      'Lightweight, non-greasy formula',
      'Prevents color fading from heat styling',
      'Suitable for all hair types'
    ],
    ingredients: ['Silk Proteins', 'Ceramic Compounds', 'Hydrolyzed Silk', 'Panthenol', 'Aloe Vera Extract', 'Vitamin E'],
    howToUse: [
      'Spray evenly on clean, towel-dried hair',
      'Hold bottle 6-8 inches away from hair',
      'Focus on mid-lengths to ends',
      'Comb through for even distribution',
      'Style as desired with heat tools'
    ],
    skinType: 'All Hair Types, Color-Treated Hair',
    benefits: ['Heat protection', 'Shine enhancement', 'Frizz control', 'Color protection', 'Lightweight']
  },
  {
    id: 8,
    name: 'Nizoral Anti-Dandruff Shampoo with 1% Ketoconazole',
    price: 15.99,
    rating: 4.6,
    reviews: 3892,
    image: '/haircare/nizoral.jpg',
    category: 'haircare',
    description: 'Clinically proven dandruff control with 1% Ketoconazole for healthy scalp.',
    fullDescription: 'Nizoral A-D Anti-Dandruff Shampoo is clinically proven to control flaking, scaling, and itching from dandruff. It contains Ketoconazole 1%, a powerful ingredient that binds to hair proteins to control dandruff. Unlike other shampoos, it gets right to the root of dandruff by killing the fungus that causes it.',
    keyFeatures: [
      'Contains 1% Ketoconazole - clinically proven',
      'Controls flaking, scaling, and itching',
      'Kills fungus that causes dandruff',
      'Gentle enough to use on color-treated hair',
      'Fresh, clean scent',
      'Use just twice a week for results'
    ],
    ingredients: ['Ketoconazole 1%', 'Coconut Fatty Acid Diethanolamide', 'Sodium Laureth Sulfate', 'Hydrochloric Acid', 'Blue 1', 'Red 40'],
    howToUse: [
      'Wet hair thoroughly',
      'Apply shampoo, massage into scalp',
      'Leave on for 3-5 minutes',
      'Rinse thoroughly',
      'Use twice a week for 8 weeks',
      'Then use as needed to maintain results'
    ],
    skinType: 'Dandruff-Prone, Oily Scalp, All Hair Types',
    benefits: ['Controls dandruff', 'Reduces itching', 'Prevents flaking', 'Clinically proven', 'Gentle formula']
  },
  {
    id: 9,
    name: 'Marc Anthony Grow Long Biotin Leave-In Conditioner Spray',
    price: 7.99,
    rating: 4.5,
    reviews: 1567,
    image: '/haircare/MarcAnthony.jpg',
    badge: 'Popular',
    category: 'haircare',
    description: 'Biotin-infused detangler and leave-in conditioner for stronger, longer hair.',
    fullDescription: 'Marc Anthony Grow Long Leave-In Conditioner Spray is infused with Biotin, Caffeine, and Ginseng to help promote longer, stronger, healthier-looking hair. This lightweight, instant detangling spray moisturizes and protects against breakage without weighing hair down. Perfect for achieving your hair growth goals.',
    keyFeatures: [
      'Infused with Biotin, Caffeine, and Ginseng',
      'Instantly detangles and smooths hair',
      'Strengthens and reduces breakage',
      'Lightweight, non-greasy formula',
      'Helps promote hair growth',
      'Sulfate, SLS, and paraben-free'
    ],
    ingredients: ['Biotin (Vitamin B7)', 'Caffeine', 'Ginseng Extract', 'Hydrolyzed Collagen', 'Vitamin E', 'Pro-Vitamin B5'],
    howToUse: [
      'Shake well before use',
      'Spray on damp or dry hair',
      'Focus on mid-lengths to ends',
      'Comb through to distribute evenly',
      'Do not rinse out',
      'Style as desired'
    ],
    skinType: 'All Hair Types, Long Hair, Damaged Hair',
    benefits: ['Promotes growth', 'Detangles instantly', 'Reduces breakage', 'Lightweight', 'Sulfate-free']
  },
  {
    id: 10,
    name: 'Lottabody Coconut Oil & Shea Wrap Me Foaming Curl Mousse',
    price: 5.99,
    rating: 4.8,
    reviews: 2134,
    image: '/haircare/Lottabody.png',
    category: 'haircare',
    description: 'Lightweight foaming mousse with coconut oil and shea for defined, bouncy curls.',
    fullDescription: 'Lottabody Coconut Oil & Shea Wrap Me Foaming Curl Mousse is a lightweight, non-flaky formula that defines and enhances natural curls and waves. Enriched with Coconut Oil and Shea Butter, it provides moisture, shine, and long-lasting hold without the crunch. Perfect for wash-and-go styles and defined curl looks.',
    keyFeatures: [
      'Enriched with Coconut Oil and Shea Butter',
      'Lightweight, non-flaky formula',
      'Defines and enhances natural curls',
      'Provides moisture and shine',
      'Long-lasting hold without crunch',
      'Great for wash-and-go styles'
    ],
    ingredients: ['Coconut Oil', 'Shea Butter', 'Glycerin', 'Pro-Vitamin B5', 'Aloe Vera', 'Natural Proteins'],
    howToUse: [
      'Shake can well before use',
      'Apply to clean, damp hair',
      'Dispense foam into palm',
      'Work through hair section by section',
      'Scrunch or rake through curls',
      'Air dry or use diffuser'
    ],
    skinType: 'Curly Hair, Wavy Hair, Natural Hair',
    benefits: ['Defines curls', 'Adds moisture', 'Long-lasting hold', 'Non-flaky', 'Adds shine']
  },
  {
    id: 11,
    name: 'L3 Level 3 Styling Powder - Natural Look Mens Powder',
    price: 24.99,
    rating: 4.6,
    reviews: 892,
    image: '/haircare/L3Level.avif',
    badge: 'New',
    category: 'haircare',
    description: 'Texturizing powder for men that adds volume and matte finish for natural style.',
    fullDescription: 'L3VEL3 Styling Powder is a professional texturizing powder designed specifically for men. This innovative formula adds instant volume, texture, and a natural matte finish. Perfect for creating messy, textured styles with strong hold that lasts all day. The lightweight powder absorbs oil and adds grip for easy styling.',
    keyFeatures: [
      'Instant volume and texture',
      'Natural matte finish',
      'Strong, long-lasting hold',
      'Absorbs excess oil',
      'Lightweight, invisible formula',
      'Professional barber-grade quality'
    ],
    ingredients: ['Silica Silylate', 'VP/VA Copolymer', 'Kaolin Clay', 'Rice Starch', 'Fragrance', 'Natural Minerals'],
    howToUse: [
      'Start with dry hair',
      'Sprinkle small amount at roots',
      'Work powder through hair with fingers',
      'Add more as needed for desired volume',
      'Style and shape as desired',
      'Use sparingly - a little goes a long way'
    ],
    skinType: 'All Hair Types, Fine Hair, Men\'s Hair',
    benefits: ['Adds volume', 'Matte finish', 'Strong hold', 'Oil absorption', 'Texture enhancement']
  },
  {
    id: 12,
    name: 'Mielle Organics Rosemary & Mint Hair Oil',
    price: 10.99,
    rating: 4.9,
    reviews: 4567,
    image: '/haircare/Mielle.webp',
    badge: 'Featured',
    category: 'haircare',
    description: 'Natural oil treatment for split ends and dry scalp with rosemary and mint.',
    fullDescription: 'Mielle Organics Rosemary Mint Strengthening Hair Oil is a nutrient-rich, intensive formula that helps reduce dry scalp and split ends. Infused with over 30 essential oils and nutrients including biotin, this treatment oil promotes healthy hair growth while soothing and moisturizing the scalp. The refreshing rosemary and mint scent invigorates the senses.',
    keyFeatures: [
      'Contains over 30 essential oils and nutrients',
      'Enriched with Biotin for hair growth',
      'Reduces dry scalp and split ends',
      'Strengthens weak, brittle hair',
      'Refreshing rosemary and mint scent',
      'Suitable for all hair types and textures'
    ],
    ingredients: ['Rosemary Oil', 'Peppermint Oil', 'Biotin', 'Coconut Oil', 'Jojoba Oil', 'Vitamin E', 'Castor Oil'],
    howToUse: [
      'Apply 2-4 drops to scalp and hair',
      'Massage gently into scalp',
      'Work through to ends',
      'Can be used on damp or dry hair',
      'Use 2-3 times per week',
      'Leave in or rinse after 30 minutes for deep treatment'
    ],
    skinType: 'All Hair Types, Dry Scalp, Natural Hair, Damaged Hair',
    benefits: ['Strengthens hair', 'Promotes growth', 'Soothes scalp', 'Reduces split ends', 'Adds shine']
  },

  // Makeup Products
  {
    id: 13,
    name: 'LAURA GELLER NEW YORK Award-Winning Baked Balance-n-Brighten',
    price: 34.00,
    rating: 4.8,
    reviews: 3421,
    image: '/makeup/LauraGeller.webp',
    badge: 'Bestseller',
    category: 'makeup',
    description: 'Award-winning color-correcting foundation that brightens and evens skin tone.',
    fullDescription: 'Laura Geller\'s iconic Baked Balance-n-Brighten Color Correcting Foundation is a multi-award winning product that color-corrects, brightens, and perfects your complexion. The unique marbleized baked formula provides buildable coverage while creating a naturally radiant, luminous finish. Suitable for all skin types.',
    keyFeatures: [
      'Award-winning baked marbleized formula',
      'Color-correcting technology evens skin tone',
      'Buildable light to medium coverage',
      'Creates natural, luminous finish',
      'Can be used wet or dry',
      'Suitable for all skin types'
    ],
    ingredients: ['Mica', 'Titanium Dioxide', 'Vitamin E', 'Aloe Vera', 'Chamomile Extract', 'Mineral Pigments'],
    howToUse: [
      'Use dry for sheer, natural coverage',
      'Dampen brush or sponge for fuller coverage',
      'Apply in circular motions starting at center of face',
      'Blend outward for seamless finish',
      'Build coverage as desired',
      'Set with powder if needed'
    ],
    skinType: 'All Skin Types, Normal to Dry',
    benefits: ['Color correction', 'Natural finish', 'Buildable coverage', 'Long-lasting', 'Brightening']
  },
  {
    id: 14,
    name: 'Wonderskin Wonder Blading All Day Lip Stain Peel Off Masque',
    price: 24.00,
    rating: 4.6,
    reviews: 2187,
    image: '/makeup/Wonderskin.jpg',
    category: 'makeup',
    description: 'Revolutionary peel-off lip stain that lasts all day without transfer or fading.',
    fullDescription: 'Wonderskin Wonder Blading Lip Stain Masque is a revolutionary 2-step lip color system that creates a long-lasting, transfer-proof lip stain. The innovative peel-off masque technology locks color into lips for up to 10 hours. Simply apply the activator, let it set for 30 seconds, then peel off to reveal a beautiful, long-lasting stain.',
    keyFeatures: [
      'Revolutionary peel-off masque technology',
      'Lasts up to 10 hours without touch-ups',
      'Transfer-proof and kiss-proof formula',
      'No bleeding or feathering',
      'Comfortable, lightweight feel',
      'Easy 2-step application process'
    ],
    ingredients: ['Plant-Based Polymers', 'Vitamin E', 'Aloe Vera', 'Natural Color Pigments', 'Moisturizing Agents'],
    howToUse: [
      'Apply lip activator evenly to clean, dry lips',
      'Wait 30 seconds for color to develop',
      'Gently peel off from outer edges',
      'Apply lip color for added intensity (optional)',
      'Seal with balm or gloss if desired',
      'Enjoy long-lasting color all day'
    ],
    skinType: 'All Skin Types, Dry Lips',
    benefits: ['Long-lasting', 'Transfer-proof', 'No reapplication', 'Comfortable wear', 'Vibrant color']
  },
  {
    id: 15,
    name: 'essence Lash Princess False Lash Effect Mascara',
    price: 4.99,
    rating: 4.7,
    reviews: 8934,
    image: '/makeup/essence.jpg',
    badge: 'Popular',
    category: 'makeup',
    description: 'Cult-favorite mascara that delivers dramatic volume and length for false lash effect.',
    fullDescription: 'The essence Lash Princess False Lash Effect Mascara is a cult favorite that delivers dramatic volume and spectacular length. The unique conic shape fiber brush delivers an amazing lash fringe that provides ultimate length and volume. This ophthalmologist-tested formula is perfect for defining and separating lashes.',
    keyFeatures: [
      'Iconic conic fiber brush for dramatic lashes',
      'Provides volume and spectacular length',
      'Defines and separates each lash',
      'Ophthalmologist tested',
      'Cruelty-free and vegan formula',
      'Amazing value for the price'
    ],
    ingredients: ['Aqua', 'Synthetic Beeswax', 'Paraffin', 'Glyceryl Stearate', 'Butylene Glycol', 'VP/Eicosene Copolymer'],
    howToUse: [
      'Start at the base of lashes',
      'Wiggle brush back and forth as you move upward',
      'Apply multiple coats for more dramatic effect',
      'Use tip of brush for lower lashes',
      'Let dry between coats if layering',
      'Remove with eye makeup remover'
    ],
    skinType: 'All Eye Types, Sensitive Eyes',
    benefits: ['Dramatic volume', 'Extreme length', 'Budget-friendly', 'No clumping', 'Long-lasting']
  },
  {
    id: 16,
    name: 'Neutrogena Makeup Remover Wipes Micellar Alcohol-Free',
    price: 8.99,
    rating: 4.5,
    reviews: 5621,
    image: '/makeup/Neutrogena.jpg',
    category: 'makeup',
    description: 'Gentle micellar makeup remover wipes that dissolve all traces of makeup.',
    fullDescription: 'Neutrogena Makeup Remover Cleansing Towelettes are made with micellar water technology to gently and effectively remove makeup. These ultra-soft cloths dissolve all traces of dirt, oil, and makeup in just one step with no heavy residue. The alcohol-free formula is gentle enough for contact lens wearers and sensitive eyes.',
    keyFeatures: [
      'Micellar water technology',
      'Removes waterproof makeup effectively',
      'Alcohol-free and gentle formula',
      'Safe for contact lens wearers',
      'Ultra-soft, plant-based fibers',
      'Dermatologist and ophthalmologist tested'
    ],
    ingredients: ['Micellar Water', 'Glycerin', 'Polysorbate 20', 'Citric Acid', 'Aloe Extract', 'Cucumber Extract'],
    howToUse: [
      'Gently wipe face to remove makeup and dirt',
      'No need to rinse afterward',
      'Use on eyes, face, and lips',
      'Dispose of wipe after use',
      'Close pack tightly after use',
      'Follow with your regular skincare routine'
    ],
    skinType: 'All Skin Types, Sensitive Skin',
    benefits: ['Quick makeup removal', 'No rinsing needed', 'Gentle formula', 'Travel-friendly', 'Effective cleansing']
  },
  {
    id: 17,
    name: 'Maybelline Lash Sensational Sky High Washable Mascara',
    price: 11.98,
    rating: 4.8,
    reviews: 7892,
    image: '/makeup/maybline.jpg',
    badge: 'Bestseller',
    category: 'makeup',
    description: 'Viral mascara with exclusive Flex Tower brush for limitless length and volume.',
    fullDescription: 'Maybelline Sky High Mascara delivers full volume and limitless length in one coat. The exclusive Flex Tower mascara brush bends to volumize and extend every single lash from root to tip. Infused with bamboo extract and fibers, this buildable, washable formula leaves lashes looking sensational with a long, full, lightweight feel.',
    keyFeatures: [
      'Exclusive Flex Tower brush reaches every lash',
      'Infused with bamboo extract and fibers',
      'Delivers limitless length and volume',
      'Buildable, lightweight formula',
      'Washable and easy to remove',
      'Ophthalmologist tested'
    ],
    ingredients: ['Bamboo Extract', 'Fibers', 'Aqua', 'Paraffin', 'Potassium Cetyl Phosphate', 'Beeswax'],
    howToUse: [
      'Apply brush at base of lashes',
      'Sweep up and through in zigzag motion',
      'Layer for more volume and length',
      'Use tip to coat lower lashes',
      'Build to desired effect',
      'Remove with warm water and cleanser'
    ],
    skinType: 'All Eye Types',
    benefits: ['Extreme length', 'Full volume', 'Lightweight', 'No flaking', 'Easy removal']
  },
  {
    id: 18,
    name: 'Julep Eyeshadow 101 Cream-to-Powder Waterproof Shadow Stick',
    price: 18.00,
    rating: 4.6,
    reviews: 1456,
    image: '/makeup/Julep-Eyeshadow.jpg',
    category: 'makeup',
    description: 'Cream-to-powder eyeshadow stick that glides on smoothly and lasts all day.',
    fullDescription: 'Julep Eyeshadow 101 Crème to Powder Waterproof Eyeshadow Stick delivers vibrant, long-lasting color in a convenient stick format. The creamy formula glides on effortlessly and sets to a transfer-proof, waterproof powder finish. Perfect for quick application on-the-go or as a base for powder eyeshadows.',
    keyFeatures: [
      'Convenient stick format for easy application',
      'Cream-to-powder formula',
      'Waterproof and transfer-proof',
      'Highly pigmented colors',
      'Can be used as base or standalone',
      'Built-in sharpener included'
    ],
    ingredients: ['Cyclopentasiloxane', 'Trimethylsiloxysilicate', 'Vitamin E', 'Mica', 'Titanium Dioxide', 'Iron Oxides'],
    howToUse: [
      'Swipe directly onto eyelid',
      'Blend with fingertip or brush while still creamy',
      'Allow to set for powder finish',
      'Layer for more intensity',
      'Use as eyeshadow base if desired',
      'Sharpen as needed with built-in sharpener'
    ],
    skinType: 'All Skin Types, Oily Eyelids',
    benefits: ['Easy application', 'Long-lasting', 'Waterproof', 'No creasing', 'Portable']
  },

  // Fragrance Products
  {
    id: 19,
    name: 'Victoria\'s Secret Bare Vanilla Body Mist',
    price: 18.00,
    rating: 4.7,
    reviews: 4521,
    image: '/fragrance/VictoriaSecret.jpg',
    badge: 'Bestseller',
    category: 'fragrance',
    description: 'Light, refreshing body mist with warm vanilla and whipped cream notes.',
    fullDescription: 'Victoria\'s Secret Bare Vanilla Fragrance Mist is a fresh, clean interpretation of vanilla. This lightweight body mist features warm vanilla layered with soft cashmere, creating an irresistibly cozy scent. Perfect for everyday wear, it provides a light fragrance that can be layered or worn alone. The non-drying formula leaves skin lightly scented and refreshed.',
    keyFeatures: [
      'Light, refreshing body mist formula',
      'Warm vanilla and whipped cream notes',
      'Long-lasting, fresh scent',
      'Perfect for layering or solo wear',
      'Non-drying, skin-friendly formula',
      'Iconic Victoria\'s Secret fragrance'
    ],
    ingredients: ['Alcohol Denat', 'Water', 'Fragrance (Parfum)', 'Glycerin', 'Aloe Barbadensis Leaf Juice', 'Vanilla Extract'],
    howToUse: [
      'Shake well before use',
      'Hold 6-8 inches away from body',
      'Spray on pulse points and body',
      'Layer with matching lotion for longer wear',
      'Reapply throughout the day as desired',
      'Can be sprayed on clothes and hair'
    ],
    skinType: 'All Skin Types',
    benefits: ['Light fragrance', 'Refreshing', 'Long-lasting', 'Layerable', 'Everyday wear']
  },
  {
    id: 20,
    name: 'Lattafa Yara - Vanilla, Gourmand, Fruity, Floral',
    price: 29.99,
    rating: 4.9,
    reviews: 3214,
    image: '/fragrance/LattafaYara.jpg',
    badge: 'Popular',
    category: 'fragrance',
    description: 'Luxurious oriental fragrance with sweet vanilla and fruity floral notes.',
    fullDescription: 'Lattafa Yara is a captivating oriental fragrance that combines sweet vanilla with gourmand, fruity, and floral notes. This luxurious scent opens with juicy tropical fruits, transitions to a heart of delicate florals, and settles into a warm, creamy vanilla base. Perfect for special occasions or everyday luxury, Yara offers excellent longevity and impressive sillage.',
    keyFeatures: [
      'Oriental gourmand fragrance profile',
      'Sweet vanilla and tropical fruit notes',
      'Delicate floral heart notes',
      'Excellent longevity (8-10 hours)',
      'Strong sillage and projection',
      'Luxury scent at affordable price'
    ],
    ingredients: ['Vanilla', 'Heliotrope', 'Orchid', 'Tangerine', 'Musk', 'Sandalwood', 'Patchouli'],
    howToUse: [
      'Apply to pulse points (wrists, neck)',
      'Spray on warm areas of body',
      'Don\'t rub wrists together after application',
      'Apply to moisturized skin for better longevity',
      'Start with 2-3 sprays, adjust as needed',
      'Allow fragrance to dry naturally'
    ],
    skinType: 'All Skin Types',
    benefits: ['Long-lasting', 'Sweet & warm', 'Compliment-getter', 'Versatile', 'Affordable luxury']
  },
  {
    id: 21,
    name: 'Al-Rehab Choco Musk Eau de Parfum Spray',
    price: 12.99,
    rating: 4.6,
    reviews: 2156,
    image: '/fragrance/Al-Rehab.jpg',
    category: 'fragrance',
    description: 'Deliciously sweet chocolate and musk fragrance for women.',
    fullDescription: 'Al-Rehab Choco Musk is a delightful gourmand fragrance that perfectly blends rich chocolate notes with soft, sensual musk. This eau de parfum spray offers a sweet, comforting scent that\'s both playful and sophisticated. The chocolate note is warm and inviting without being overpowering, while the musk adds depth and longevity. Perfect for those who love sweet, cozy fragrances.',
    keyFeatures: [
      'Gourmand chocolate and musk blend',
      'Sweet, comforting fragrance',
      'Eau de Parfum concentration',
      'Good longevity (6-8 hours)',
      'Affordable Middle Eastern perfumery',
      'Unisex appeal despite being marketed to women'
    ],
    ingredients: ['Chocolate', 'Musk', 'Vanilla', 'Amber', 'Tonka Bean', 'Sandalwood'],
    howToUse: [
      'Apply 2-3 sprays to pulse points',
      'Focus on wrists, neck, behind ears',
      'Can be layered with vanilla lotions',
      'Apply after moisturizing for best results',
      'Reapply after 6-8 hours if desired',
      'Store in cool, dry place'
    ],
    skinType: 'All Skin Types',
    benefits: ['Sweet & cozy', 'Affordable', 'Unique scent', 'Good longevity', 'Compliment magnet']
  },
  {
    id: 22,
    name: 'Ard Al Zaafaran Yara Perfume Roller for Women',
    price: 8.99,
    rating: 4.8,
    reviews: 1876,
    image: '/fragrance/Ard-Al.jpg',
    category: 'fragrance',
    description: 'Convenient perfume roller with sweet, floral vanilla fragrance.',
    fullDescription: 'Ard Al Zaafaran Yara Perfume Roller offers the convenience of a portable roller bottle with a luxurious fragrance. This sweet, floral vanilla scent is perfect for on-the-go application. The roller format allows for precise application to pulse points and ensures no fragrance is wasted. Compact enough to fit in any purse or pocket, making it ideal for travel and touch-ups throughout the day.',
    keyFeatures: [
      'Convenient roller ball applicator',
      'Travel-friendly compact size',
      'Sweet vanilla and floral notes',
      'Precise, mess-free application',
      'Long-lasting oil-based formula',
      'Affordable luxury fragrance'
    ],
    ingredients: ['Perfume Oil', 'Vanilla Essence', 'Floral Extracts', 'Musk', 'Amber', 'Sandalwood'],
    howToUse: [
      'Roll onto pulse points',
      'Apply to wrists, neck, behind ears',
      'Roll gently, don\'t press too hard',
      'Let oil absorb into skin',
      'Reapply as needed throughout day',
      'Perfect for purse or travel bag'
    ],
    skinType: 'All Skin Types',
    benefits: ['Portable', 'Mess-free', 'Long-lasting', 'Travel-friendly', 'Easy application']
  },
  {
    id: 23,
    name: 'Lattafa Khamrah - Vanilla, Warm Spicy, Amber, Cinnamon',
    price: 34.99,
    rating: 4.9,
    reviews: 2987,
    image: '/fragrance/LattafaKhamrah.webp',
    badge: 'Featured',
    category: 'fragrance',
    description: 'Intoxicating oriental fragrance with warm spices and rich vanilla.',
    fullDescription: 'Lattafa Khamrah is a bold, intoxicating oriental fragrance that combines sweet vanilla with warm spices, rich amber, and aromatic cinnamon. This luxurious scent opens with a burst of cinnamon and spices, develops into a heart of dates and praline, and settles into a warm base of vanilla, amber, and tonka bean. Perfect for evening wear and cooler months, Khamrah offers exceptional longevity and projection.',
    keyFeatures: [
      'Bold oriental spicy fragrance',
      'Warm vanilla, amber, and cinnamon blend',
      'Exceptional longevity (10+ hours)',
      'Strong projection and sillage',
      'Perfect for evening and special occasions',
      'Unisex appeal'
    ],
    ingredients: ['Cinnamon', 'Vanilla', 'Amber', 'Tonka Bean', 'Dates', 'Praline', 'Benzoin', 'Myrrh'],
    howToUse: [
      'Apply 2-4 sprays maximum (very strong)',
      'Focus on pulse points and clothing',
      'Best for evening wear and cooler weather',
      'Allow to macerate on skin for full development',
      'Less is more with this powerful scent',
      'Avoid over-application in enclosed spaces'
    ],
    skinType: 'All Skin Types',
    benefits: ['Very long-lasting', 'Unique scent', 'Bold & luxurious', 'Great projection', 'Unisex']
  },
  {
    id: 24,
    name: 'Al-Rehab Choco Musk Concentrated Perfume Rollerball',
    price: 5.99,
    rating: 4.7,
    reviews: 1543,
    image: '/fragrance/Al-Rehab-Choco.jpg',
    category: 'fragrance',
    description: 'Concentrated oil perfume roller with chocolate and musk notes.',
    fullDescription: 'Al-Rehab Choco Musk Concentrated Perfume Oil in a convenient rollerball format offers the same beloved chocolate-musk fragrance in a portable, alcohol-free formula. This concentrated oil provides excellent longevity and can be easily applied throughout the day. The rollerball format ensures precise application and no waste, making it perfect for travel or keeping in your bag for touch-ups.',
    keyFeatures: [
      'Concentrated oil-based perfume',
      'Alcohol-free formula',
      'Convenient rollerball applicator',
      'Travel-friendly size',
      'Excellent longevity (8-10 hours)',
      'Unisex chocolate-musk scent'
    ],
    ingredients: ['Perfume Oil Concentrate', 'Chocolate Accord', 'Musk', 'Vanilla', 'Tonka Bean', 'Natural Oils'],
    howToUse: [
      'Roll onto pulse points',
      'Apply to wrists, neck, inner elbows',
      'Let oil absorb into skin completely',
      'A little goes a long way',
      'Reapply every 8-10 hours if needed',
      'Store away from direct sunlight'
    ],
    skinType: 'All Skin Types, Sensitive Skin',
    benefits: ['Concentrated formula', 'Alcohol-free', 'Very portable', 'Long-lasting', 'Budget-friendly']
  },

  // Tools & Accessories
  {
    id: 25,
    name: 'BOYATU Travel Makeup Bag Cosmetic Bags for Women',
    price: 28.99,
    rating: 4.7,
    reviews: 3421,
    image: '/tools/BOYATU.webp',
    badge: 'Bestseller',
    category: 'tools-accessories',
    description: 'Spacious travel makeup organizer with multiple compartments for cosmetics.',
    fullDescription: 'BOYATU Travel Makeup Bag is a premium cosmetic organizer designed for women on the go. This spacious bag features multiple compartments, zippered pockets, and elastic bands to keep all your beauty products organized and secure. Made from durable, water-resistant material, it protects your cosmetics from spills and damage. The elegant design makes it perfect for travel, gym, or everyday use.',
    keyFeatures: [
      'Multiple compartments and zippered pockets',
      'Water-resistant, easy-to-clean material',
      'Durable construction with quality zippers',
      'Spacious design holds full-size products',
      'Elastic bands keep items secure',
      'Elegant, portable design perfect for travel'
    ],
    ingredients: ['Premium Nylon', 'Water-Resistant Coating', 'YKK Zippers', 'Reinforced Stitching'],
    howToUse: [
      'Open main compartment for larger items',
      'Use side pockets for brushes and tools',
      'Store liquids in sealed compartments',
      'Secure items with elastic bands',
      'Wipe clean with damp cloth as needed',
      'Perfect for bathroom, travel, or gym'
    ],
    skinType: 'All Users',
    benefits: ['Organized storage', 'Travel-friendly', 'Water-resistant', 'Durable', 'Spacious']
  },
  {
    id: 26,
    name: 'LAURA GELLER NEW YORK 5pc Full Face Brush Set',
    price: 45.00,
    rating: 4.8,
    reviews: 2187,
    image: '/tools/LAURA-GELLER.webp',
    badge: 'Professional',
    category: 'tools-accessories',
    description: 'Professional 5-piece brush set for flawless makeup application.',
    fullDescription: 'LAURA GELLER NEW YORK 5pc Full Face Brush Set includes everything you need for a complete makeup application. Each brush is crafted with premium synthetic bristles that are soft, durable, and cruelty-free. The set includes brushes for foundation, powder, blush, eyeshadow, and blending. Perfect for both beginners and makeup enthusiasts, these professional-quality brushes deliver seamless, airbrushed results.',
    keyFeatures: [
      'Professional 5-piece complete set',
      'Premium synthetic, cruelty-free bristles',
      'Includes foundation, powder, blush, eye brushes',
      'Soft, durable, and easy to clean',
      'Ergonomic handles for precise control',
      'Professional quality at home'
    ],
    ingredients: ['Synthetic Bristles', 'Aluminum Ferrules', 'Wooden Handles', 'Cruelty-Free Materials'],
    howToUse: [
      'Use foundation brush for base application',
      'Apply powder with fluffy powder brush',
      'Blend blush with angled brush',
      'Create eye looks with shadow brushes',
      'Clean brushes weekly with mild soap',
      'Store in dry place to maintain shape'
    ],
    skinType: 'All Skin Types',
    benefits: ['Professional quality', 'Complete set', 'Easy to clean', 'Cruelty-free', 'Durable']
  },
  {
    id: 27,
    name: 'The 3-in-1 Electric Makeup Brush Cleaner Machine',
    price: 24.99,
    rating: 4.6,
    reviews: 1876,
    image: '/tools/The-3-in-1.jpg',
    category: 'tools-accessories',
    description: 'Automatic electric brush cleaner that washes, rinses, and dries makeup brushes.',
    fullDescription: 'The 3-in-1 Electric Makeup Brush Cleaner Machine makes cleaning your makeup brushes quick and effortless. This innovative device automatically washes, rinses, and dries your brushes in minutes. Simply attach your brush, add cleanser and water, and let the machine do the work. The spinning mechanism thoroughly cleans bristles without damaging them, extending the life of your brushes.',
    keyFeatures: [
      'Automatic 3-in-1 cleaning system',
      'Washes, rinses, and dries brushes',
      'Includes 8 different collar sizes',
      'Deep cleans without damage',
      'Fast cleaning in under 60 seconds',
      'Battery-operated for portability'
    ],
    ingredients: ['ABS Plastic Housing', 'Silicone Collars', 'Motor Components', '8 Size Adapters'],
    howToUse: [
      'Select appropriate collar size for brush',
      'Add water and brush cleanser to bowl',
      'Insert brush and turn on machine',
      'Let spin for 30 seconds to clean',
      'Replace water and rinse for 10 seconds',
      'Spin dry for 20 seconds until dry'
    ],
    skinType: 'All Brush Types',
    benefits: ['Time-saving', 'Deep cleaning', 'Extends brush life', 'Easy to use', 'Portable']
  },
  {
    id: 28,
    name: 'ROSELYNBOUTIQUE Gua Sha Facial Tools & Face Roller Set',
    price: 19.99,
    rating: 4.7,
    reviews: 2543,
    image: '/tools/ROSELYNBOUTIQUE.jpg',
    category: 'tools-accessories',
    description: 'Natural jade face roller and gua sha set for facial massage and sculpting.',
    fullDescription: 'ROSELYNBOUTIQUE Gua Sha and Face Roller Set includes natural jade stone tools for facial massage and lymphatic drainage. The face roller reduces puffiness and increases circulation, while the gua sha tool sculpts and contours facial features. Regular use can help reduce fine lines, improve skin elasticity, and promote a healthy, radiant glow. The cooling jade stone soothes skin and enhances product absorption.',
    keyFeatures: [
      'Natural jade stone construction',
      'Includes face roller and gua sha tool',
      'Promotes lymphatic drainage',
      'Reduces puffiness and fine lines',
      'Improves product absorption',
      'Cooling, soothing effect on skin'
    ],
    ingredients: ['Natural Jade Stone', 'Stainless Steel Frame', 'Premium Packaging'],
    howToUse: [
      'Cleanse face and apply serum or oil',
      'Roll face roller upward and outward',
      'Use gua sha with gentle pressure',
      'Start from neck, move upward to forehead',
      'Use 3-5 times per week',
      'Clean tools after each use with gentle soap'
    ],
    skinType: 'All Skin Types',
    benefits: ['Reduces puffiness', 'Sculpts face', 'Improves circulation', 'Relaxing', 'Natural']
  },
  {
    id: 29,
    name: 'Painless Facial Hair Removal Cream for Women',
    price: 12.99,
    rating: 4.5,
    reviews: 3124,
    image: '/tools/Painless-Facial.jpg',
    badge: 'Popular',
    category: 'tools-accessories',
    description: 'Gentle, painless hair removal cream specifically formulated for facial hair.',
    fullDescription: 'Painless Facial Hair Removal Cream is specially formulated for delicate facial skin. This gentle depilatory cream effectively removes unwanted facial hair in just minutes without pain, irritation, or razor burn. The moisturizing formula contains soothing ingredients that leave skin soft and smooth. Perfect for upper lip, chin, and cheek areas, it provides salon-quality results at home.',
    keyFeatures: [
      'Painless hair removal in minutes',
      'Specially formulated for facial skin',
      'No irritation or razor burn',
      'Moisturizing, soothing formula',
      'Quick and easy application',
      'Dermatologist tested for sensitive skin'
    ],
    ingredients: ['Calcium Hydroxide', 'Aloe Vera Extract', 'Vitamin E', 'Chamomile Extract', 'Moisturizing Agents'],
    howToUse: [
      'Test on small skin area first',
      'Apply thick, even layer to dry skin',
      'Leave on for 5-8 minutes (max 10)',
      'Wipe off with damp cloth or spatula',
      'Rinse thoroughly with cool water',
      'Avoid sun exposure for 24 hours after use'
    ],
    skinType: 'All Skin Types, Sensitive Skin',
    benefits: ['Painless', 'Fast results', 'No irritation', 'Smooth skin', 'Easy to use']
  },
  {
    id: 30,
    name: 'Graphene V-Line Mask Chin Up Mask',
    price: 16.99,
    rating: 4.6,
    reviews: 1897,
    image: '/tools/Graphene-V-Line.jpeg',
    category: 'tools-accessories',
    description: 'Lifting and firming chin mask for V-line face contouring.',
    fullDescription: 'Graphene V-Line Mask is an innovative facial slimming mask that lifts and firms the chin and jawline. Using graphene technology combined with moisturizing ingredients, this mask helps reduce double chin appearance and creates a more defined V-line face shape. The comfortable, breathable design allows the mask to adhere closely to skin for maximum effectiveness. Perfect for use during skincare routines or while relaxing.',
    keyFeatures: [
      'Graphene technology for lifting effect',
      'Firms chin and defines jawline',
      'Reduces double chin appearance',
      'Comfortable, breathable design',
      'Reusable with proper care',
      'Works while you relax or do tasks'
    ],
    ingredients: ['Graphene Fabric', 'Collagen', 'Hyaluronic Acid', 'Vitamin E', 'Plant Extracts'],
    howToUse: [
      'Cleanse and dry face thoroughly',
      'Place mask over chin and secure on head',
      'Wear for 30-60 minutes',
      'Use 2-3 times per week',
      'Can be worn during skincare routine',
      'Hand wash and air dry after use'
    ],
    skinType: 'All Skin Types',
    benefits: ['Lifts & firms', 'Defines jawline', 'Reduces puffiness', 'Reusable', 'Comfortable']
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

