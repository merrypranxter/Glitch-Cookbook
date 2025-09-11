import { Recipe, Section } from '../types';

// The full, unabridged text of the Glitch Art Cookbook
const rawCookbookText = `
# The Complete Glitch Art Cookbook
*A Compendium of Databending Recipes*

## Recipe 1: Basic Text Editor Databending
**Best for:** Quick experiments, beginners
### Ingredients
- **File Types:** .JPG, .PNG, .GIF, .PSD (medium files ~500px wide work best)[1][2]
- **Source:** Any image file you want to corrupt
### Tools & Programs
- **Primary:** Simple text editors
- PC: Notepad
- Mac: TextEdit
- **Avoid:** Microsoft Word or rich text editors (unless you want extra chaos)[1]
### Settings & Parameters
1. **File prep:** Duplicate original, change extension to .txt
2. **Edit zone:** Scroll down past header (first ~20% of file)
3. **Edit amount:** Start small - change a few characters at a time
4. **Safe zones:** Avoid first and last 10% of file data
### Expected Results & Why
- **Horizontal shifts:** Adding/deleting data moves pixels left/right
- **Color channel separation:** Middle sections often control RGB values
- **Gradient patterns:** Repeating sequences like "0000000" create banding effects[1][2]
- **Why it works:** You're corrupting pixel data while preserving file structure
***
## Recipe 2: Real-Time ImageGlitch (Mac)
**Best for:** Live feedback, controlled experimentation
### Ingredients
- **File Types:** .PSD files (highly recommended), .JPG, .PNG, .GIF[1][2]
- **Platform:** Mac only
### Tools & Programs
- **Primary:** ImageGlitch app (Mac App Store)
- **Advantage:** Real-time preview, no extension changing needed
### Settings & Parameters
1. **Edit location:** Scroll to middle sections of hex data
2. **Techniques:** Delete data in some areas, Add data in others, Copy/paste hex segments
3. **Undo safety:** If image breaks completely, hit undo
### Expected Results & Why
- **PSD magic:** Different hex areas control unique features (RGB channels vs. positioning)[1]
- **Format conversion:** Save as different extension for compound effects
- **Real-time feedback:** See changes instantly without file conversion dance
***
## Recipe 3: Audacity Image Sonification
**Best for:** Unique textures, echo/delay effects
### Ingredients
- **File Types:** Uncompressed images (.BMP, .TIFF recommended)[3][4]
- **Size:** Medium resolution works best
### Tools & Programs
- **Primary:** Audacity (free, cross-platform)
- **Import settings:** Raw data import, signed 16-bit PCM
### Settings & Parameters
1. **Import:** File > Import > Raw Data
2. **Format:** Signed 16-bit PCM, mono or stereo
3. **Effects to try:** Echo/Delay, Reverb, Amplify, Reverse
4. **Export:** Same raw format settings
### Expected Results & Why
- **Echo effects:** Create literal visual echoes and repetition[3]
- **Frequency manipulation:** High-pass/low-pass filters affect pixel brightness
- **Waveform distortion:** Audio effects translate to visual distortions
- **Why it works:** Treating pixel data as audio samples corrupts spatial relationships
***
## Recipe 4: Hex Editor Precision Corruption
**Best for:** Surgical edits, controlled glitching
### Ingredients
- **File Types:** Any image format (.JPG, .BMP, .PNG)[5]
- **Backup:** Always work on copies
### Tools & Programs
- **Primary:** Hex editors
- XVI32 (Windows, free)
- HexFiend (Mac)
- GHex (Linux)
### Settings & Parameters
1. **Mode:** Set to "Insert" mode, single byte display[5]
2. **Edit zones:** Avoid first ~200 bytes (header) and last ~100 bytes
3. **Techniques:** Single byte changes, Find & replace, Pattern insertion
4. **Preservation:** Save as .BMP if file becomes unreadable[5]
### Expected Results & Why
- **Controlled corruption:** Precise placement of glitches
- **Pattern effects:** Find/replace creates systematic distortions
- **Color shifts:** Changing single bytes affects RGB values
- **File rescue:** BMP conversion saves corrupted files that won't open[5]
***
## Recipe 5: Video Codec Hacking (Advanced)
**Best for:** Automated video glitching, systematic corruption
### Ingredients
- **File Types:** .MP4, .MOV (any video format)
- **System:** Unix-style terminal (Mac/Linux/Windows with WSL)
### Tools & Programs
- **Primary:** FFmpeg source code compilation
- **Dependencies:** git, yasm, code editor (Atom, VSCode)[4]
- **Target files:** h263data.c, proresdata.c in libavcodec folder
### Settings & Parameters
1. **Setup:** Clone FFmpeg, compile custom version
2. **Edit targets:** Codec data arrays in .c files
3. **Compilation:** \`make install\` after each edit
4. **Usage:** \`./glitchcodec -i input.mp4 output.mp4\`
### Expected Results & Why
- **Systematic glitching:** Every video processed gets same corruption pattern
- **Compression artifacts:** Exploits video compression algorithms
- **Codec-specific effects:** h263 vs ProRes create different glitch types
- **Why it works:** Corrupting compression lookup tables affects all processed video[4]
***
## Recipe 6: Datamoshing I-Frame Manipulation
**Best for:** Pixel bleeding, motion smears
### Ingredients
- **File Types:** .MP4, .AVI (compressed video formats)
- **Content:** Videos with motion work best
### Tools & Programs
- **Primary:** Hex editor + video knowledge
- **Alternative:** Specialized datamoshing scripts
### Settings & Parameters
1. **I-frame identification:** Look for frame header patterns in hex
2. **Removal technique:** Delete I-frame data carefully
3. **Duplication:** Copy P-frames multiple times
4. **Safe zones:** Preserve container headers
### Expected Results & Why
- **Pixel bleeding:** Motion vectors applied to wrong reference frames[4]
- **Temporal smears:** Movement creates trailing effects
- **Blooming:** Duplicated frames compound motion artifacts
- **Why it works:** Exploits inter-frame compression dependency[4]
***
## Recipe 7: BMP Creation & Custom Corruption
**Best for:** Understanding file structure, precise control
### Ingredients
- **Target:** Create 4x2 pixel BMP from scratch
- **Tools:** Hex editor in insert mode
### Tools & Programs
- **Primary:** Any hex editor
### Settings & Parameters
1. **Header construction:** 54 bytes total
2. **Pixel data:** BGR format (not RGB)
3. **Padding:** Rows must be multiple of 4 bytes[6]
### Expected Results & Why
- **Complete understanding:** Know every byte's purpose
- **Custom patterns:** Create intentional glitch structures
- **Foundation knowledge:** Apply to corrupting other formats
- **Padding effects:** Understanding row structure for better corruption[6]
***
## Pro Tips for All Recipes
**Best for:** Improving technique and safety
### File Type Characteristics
- **JPG:** Good for traditional databends, compression artifacts[1][3]
- **PSD:** Excellent layered effects, different areas control different features[1]
- **BMP:** Simple structure, predictable corruption patterns[6]
- **GIF:** Limited colors, interesting palette corruptions
### Safety Parameters
- **Always backup originals** before any corruption attempt
- **Start small:** Make tiny changes first, then increase
- **Header avoidance:** First 10-20% of file usually contains critical data
- **Footer awareness:** Last portion may contain important markers
### Troubleshooting Corrupt Files
1. **Save as BMP:** Universal recovery method [5]
2. **Try different viewers:** MS Paint often opens broken files
3. **Reduce corruption:** Undo last changes if file breaks completely
4. **Format conversion:** Sometimes changing extension helps
### Advanced Combinations
- **Chain multiple techniques:** Text edit → Audacity → hex edit
- **Format ping-ponging:** Save as different formats between corruptions[1]
- **Systematic approaches:** Use find/replace for consistent patterns[5]
***
# The Complete Glitch Art Cookbook - Volume 2
*Advanced Databending Recipes & Alternative Techniques*

## Recipe 8: Pixel Sorting Algorithm Glitches
**Best for:** Organized chaos, streaking effects
### Ingredients
- **File Types:** High-resolution images (.JPG, .PNG, .TIFF)[1]
- **Content:** Images with strong contrast work best
### Tools & Programs
- **Primary:** Processing IDE with pixel sorting scripts
- **Alternative:** Custom Python scripts or online pixel sorters
### Settings & Parameters
1. **Sort direction:** Horizontal, vertical, or diagonal
2. **Sort criteria:** Brightness values (most common), Hue ranges, Saturation levels
3. **Threshold settings:** Determine where sorting starts/stops
4. **Interval length:** Control how long sorted streaks extend
### Expected Results & Why
- **Color streaks:** Pixels rearrange into flowing bands of similar values[1]
- **Preserved structure:** Original image remains recognizable but distorted
- **Algorithmic precision:** Creates organized, mathematical-feeling glitches
- **Why it works:** Exploits human visual processing of ordered vs. chaotic information
***
## Recipe 9: Online Glitch Generators
**Best for:** Quick experiments, social media content
### Ingredients
- **File Types:** .JPG, .PNG, .GIF (web-optimized formats)
- **Platform:** Any web browser
### Tools & Programs
- **PhotoMosh:** Real-time glitch preview, GIF creation[2]
- **Fotor:** RGB split, digital distortion effects[3]
- **Lunapic:** One-click glitch application[3]
- **corrupt-a-file.net:** Systematic file corruption[4]
### Settings & Parameters
1. **PhotoMosh effects:** RGB splitting, VHS distortion, Combination layering[2]
2. **Effect intensity:** Usually 0-100% sliders
3. **Animation settings:** Frame rate and loop duration for GIFs
4. **Export quality:** Balance file size vs. effect clarity
### Expected Results & Why
- **Instant gratification:** Real-time preview of changes[2]
- **Social media ready:** Optimized for web sharing
- **Layered effects:** Combine multiple glitches simultaneously[2]
***
## Recipe 10: Audio File Format Confusion
**Best for:** Rhythmic distortions, unexpected textures
### Ingredients
- **Primary:** .MP3 files (work better than .WAV for this technique)[5]
- **Secondary:** Any audio format
### Tools & Programs
- **Primary:** Text editors (Notepad, TextEdit)
- **Alternative:** Various audio editors treating wrong file types
- **Bonus:** Video editing software loading audio as video data
### Settings & Parameters
1. **Text editor method:** Skip header, Focus on middle, Make selective deletions[5]
2. **Cross-format loading:** Load audio in video editors, Import video files in audio software
### Expected Results & Why
- **Rhythmic patterns:** Text edits create beat-like repetitions[6]
- **Harmonic distortions:** Data corruption affects frequency relationships[5]
- **Structural preservation:** Header intact means file still plays
- **Why it works:** Audio compression leaves exploitable data patterns in file structure
***
## Recipe 11: Compression Interruption Technique
**Best for:** Partial corruption, controlled destruction
### Ingredients
- **File Types:** Any document or media file
- **Tools:** File compression software (WinRAR, 7-Zip)
### Tools & Programs
- **Primary:** WinRAR or similar compression tool
- **Method:** Intentional process interruption[4][7]
### Settings & Parameters
1. **Compression setup:** Standard settings, no special configuration
2. **Critical timing:** Pause at exactly 90% completion[4]
3. **Extraction method:** Extract partial archive contents
4. **Verification:** Attempt to open corrupted result
### Expected Results & Why
- **Selective damage:** File partially intact, partially broken[4]
- **Unpredictable outcomes:** Different results each attempt
- **Subtle corruption:** Less dramatic than text editor methods
- **Why it works:** Incomplete compression creates malformed but readable files[7]
***
## Recipe 12: Cross-Platform Audio Databending
**Best for:** Unique textures, experimental sound design
### Ingredients
- **Primary:** Uncompressed audio files (.WAV, .AIFF)
- **Images:** .BMP or .TIFF files to process as audio[8]
### Tools & Programs
- **Primary:** Audacity (cross-platform compatibility)[8]
- **Alternative:** mhWaveEdit, Cool Edit Pro
- **Linux specific:** Command-line piping tools[8]
### Settings & Parameters
1. **Import settings:** Raw data import, signed 16-bit
2. **Effect combinations:** Echo + reverb, Pitch shifting, Time stretching[8]
3. **Selective editing:** Copy/paste sections strategically[9]
### Expected Results & Why
- **Textural richness:** Audio effects create complex visual patterns[8]
- **Controlled chaos:** Strategic editing vs. random corruption
- **Cross-media pollination:** Audio processing creates visual effects
- **Why it works:** Raw data manipulation regardless of intended format[8]
***
## Recipe 13: Circuit Bending Digital Files
**Best for:** Hardware-inspired digital corruption
### Ingredients
- **File Types:** Video files, especially .AVI and .MP4
- **Concept:** Mimicking physical circuit bending in software
### Tools & Programs
- **Concept:** Software that mimics circuit bending principles[10]
- **Video synthesis tools:** Programs designed for live visual performance[11]
- **Custom scripts:** Code that introduces random electronic-style errors
### Settings & Parameters
1. **Random voltage simulation:** Introduce random value spikes
2. **Connection rerouting:** Swap data channels unexpectedly
3. **Feedback loops:** Create recursive processing errors
4. **Live processing:** Real-time corruption for performance use[11]
### Expected Results & Why
- **Electronic aesthetics:** Digital recreation of hardware malfunction feel[10]
- **Unpredictable timing:** Errors appear randomly during playback
- **Performance ready:** Suitable for live visual shows[11]
- **Why it works:** Simulates the random electrical interference of physical circuit bends
***
## Recipe 14: Photoshop Layer Blend Corruptions
**Best for:** Controlled artistic effects, professional results
### Ingredients
- **File Types:** Layered .PSD files, high-resolution images
- **Software:** Adobe Photoshop or similar layer-capable editor
### Tools & Programs
- **Primary:** Adobe Photoshop
- **Techniques:** Layer blend modes, channel manipulation[12]
- **Advanced:** Custom brush creation from corrupted data
### Settings & Parameters
1. **Channel separation:** Split RGB channels, offset individually
2. **Blend mode experiments:** Difference mode, Overlay, Color dodge/burn[12]
3. **Layer masking:** Selective corruption application
4. **Filter combinations:** Multiple filters applied sequentially
### Expected Results & Why
- **Professional polish:** Clean execution of glitch aesthetics[12]
- **Precise control:** Exactly target areas for corruption
- **Layered complexity:** Multiple effects without file damage risk
- **Why it works:** Software-controlled simulation of databending results[12]
***
## Recipe 15: Video Format Transmutation
**Best for:** Extreme datamoshing, format-specific artifacts
### Ingredients
- **Source:** .MP4 or .AVI files
- **Target:** Force-convert to wrong video formats
### Tools & Programs
- **Primary:** FFmpeg command line[2]
- **Alternative:** Video editing software with format override
- **Advanced:** Custom codec modification
### Settings & Parameters
1. **Format forcing:** Change container without re-encoding contents
2. **Codec mismatching:** Apply wrong decompression algorithm
3. **Frame rate alterations:** Speed changes during corruption
4. **Resolution conflicts:** Force different aspect ratios
### Expected Results & Why
- **Severe artifacts:** Format mismatches create dramatic distortions
- **Playback issues:** Files may be unstable but visually interesting
- **Color space errors:** Wrong color interpretation creates false color effects
- **Why it works:** Exploits assumptions built into video format specifications
***
## Recipe 16: Live Performance Glitching
**Best for:** Real-time visual performance, interactive art
### Ingredients
- **Hardware:** Fast computer, video input capability
- **Software:** Real-time video processing tools
### Tools & Programs
- **Magic Music Visuals:** Generative real-time effects[11]
- **Lumen:** Live visual synthesis[11]
- **TouchDesigner:** Node-based real-time processing
- **Custom Max/MSP patches:** Interactive glitch generation
### Settings & Parameters
1. **Real-time processing:** No render waiting, immediate feedback
2. **MIDI/audio reactive:** Effects triggered by sound input[11]
3. **Parameter mapping:** Hardware controllers adjust corruption intensity
4. **Feedback systems:** Video output feeds back into input
### Expected Results & Why
- **Interactive aesthetics:** Audience or performer controls corruption[11]
- **Temporal variations:** Effects change continuously over time
- **Performance integration:** Glitches synchronized with music/movement
- **Why it works:** Live processing eliminates file-based limitations, enables responsive art
***
## Pro Tips for Advanced Techniques
**Best for:** Advanced creative strategies
### Cross-Technique Combinations
- **Layer multiple approaches:** Start with text editing, finish in Photoshop[12]
- **Format chain corruption:** Convert through multiple wrong formats
- **Live + recorded hybrid:** Process recorded corruptions in real-time software
### Platform-Specific Advantages
- **Linux:** Command-line piping for unique data flows[8]
- **Mac:** ImageGlitch + Audacity combination workflows
- **Windows:** Notepad + compression tool reliability[4]
### Professional Integration
- **Client work:** Use Photoshop methods for controlled, undoable results[12]
- **Performance art:** Master real-time tools for live shows[11]
- **Web content:** Online tools for quick social media assets[3]
### Advanced File Recovery
- **Compression method:** When files break completely, try archive extraction[4]
- **Format conversion:** BMP conversion still works as universal recovery
- **Selective corruption:** Use compression interruption for subtle effects[7]
### Experimental Extensions
- **Custom scripting:** Write code to automate favorite techniques
- **Hardware integration:** Connect physical sensors to corruption parameters
- **Network corruption:** Process files through network protocols to introduce packet-loss-style errors
***
# The Complete Glitch Art Cookbook - Volume 3
*Experimental & Cutting-Edge Databending Recipes*

## Recipe 17: Physical Scanner Manipulation
**Best for:** Unique analog-digital hybrid effects
### Ingredients
- **File Types:** Physical photographs, printed images, any flat objects
- **Equipment:** Flatbed scanner with removable lid
### Tools & Programs
- **Primary:** Any flatbed scanner
- **Software:** Scanner software with manual control settings
- **Technique:** Real-time physical manipulation during scan process[1]
### Settings & Parameters
1. **Scanner settings:** High resolution (600+ DPI), slow scan speed
2. **Movement timing:** Move objects during scan line progression
3. **Manipulation types:** Slide photo, Lift and replace, Rotate objects[1]
4. **Light source:** Leave scanner lid open for environmental light mixing
### Expected Results & Why
- **Motion streaks:** Physical movement creates scan line inconsistencies[1]
- **Layered reality:** Multiple positions captured in single image
- **Authentic analog feel:** Real-world physics affect digital capture
- **Why it works:** Scanner captures sequential lines, physical changes affect each line differently
***
## Recipe 18: Dual VCR Datamoshing
**Best for:** Authentic analog video corruption
### Ingredients
- **File Types:** VHS tapes, analog video sources
- **Hardware:** Two VCR units, connecting cables
### Tools & Programs
- **Primary:** Two VCR players/recorders
- **Method:** Tape-to-tape signal degradation
- **Technique:** Interrupt recording mid-process[2]
### Settings & Parameters
1. **VCR setup:** Connect output of VCR1 to input of VCR2
2. **Recording process:** Start recording, then pause at critical moments
3. **Signal manipulation:** Disconnect/reconnect cables, Apply magnetic interference, Use damaged source tapes[2]
4. **Timing:** Interrupt during action sequences for maximum effect
### Expected Results & Why
- **Authentic analog artifacts:** Real electromagnetic interference patterns
- **Temporal bleeding:** Previous frames persist through recording interruption[2]
- **Signal degradation:** Multiple generation loss creates organic decay
- **Why it works:** Analog signal transmission naturally corrupts through electromagnetic interference
***
## Recipe 19: Automated Batch Processing
**Best for:** Mass experimentation, systematic exploration
### Ingredients
- **File Types:** Large collections of images (.JPG, .PNG, .BMP)
- **Platform:** Python environment with image libraries
### Tools & Programs
- **Primary:** Custom Python scripts (like glitch-tool)[3]
- **Libraries:** PIL/Pillow, NumPy for image manipulation
- **Alternative:** ImageMagick command-line batch processing
### Settings & Parameters
1. **Script parameters:** Number of outputs, Corruption intensity, Types of corruption[3]
2. **Batch settings:** Process entire folders automatically
3. **Output organization:** Systematic naming for easy comparison
4. **Quality control:** Automated filtering of completely broken files
### Expected Results & Why
- **Systematic exploration:** Test thousands of variations quickly[3]
- **Pattern discovery:** Find which techniques work best on specific image types
- **Comparative analysis:** Side-by-side results reveal subtle differences
- **Why it works:** Automation allows exploration of parameter spaces impossible to test manually[3]
***
## Recipe 20: AI-Powered Glitch Generation
**Best for:** Modern, sophisticated corruption patterns
### Ingredients
- **File Types:** Any digital media format
- **Platform:** AI-powered online tools and services
### Tools & Programs
- **Primary:** Reelmind.ai, GlitchGen X[4]
- **Alternative:** DeepGlitch, PixelMosh Pro
- **Features:** Multi-image fusion, video-consistent glitching[4]
### Settings & Parameters
1. **AI model selection:** Choose corruption style (VHS decay, cyberpunk, chaos engine)
2. **Intensity controls:** AI-guided corruption levels maintain visual coherence
3. **Multi-modal input:** Combine images, video, and audio for complex results[4]
4. **Custom training:** Upload your own corruption examples to train personalized models
### Expected Results & Why
- **Intelligent corruption:** AI preserves important visual elements while corrupting others[4]
- **Consistent video effects:** Frame-to-frame coherence in motion graphics
- **Style transfer:** Apply specific corruption aesthetics systematically[4]
- **Why it works:** Machine learning identifies which corruptions are visually interesting vs. merely broken
***
## Recipe 21: Network Protocol Corruption
**Best for:** Unique packet-loss inspired effects
### Ingredients
- **File Types:** Any digital media
- **Method:** Transmit files through unreliable network connections
### Tools & Programs
- **Primary:** Network simulation software
- **Alternative:** Actual slow/unreliable connections (mobile data, WiFi)
- **Tools:** Wireshark for packet analysis, custom network corruption scripts
### Settings & Parameters
1. **Network conditions:** Simulate high packet loss (10-30%)
2. **Transmission methods:** FTP transfers, Email attachments, Peer-to-peer file sharing
3. **Protocol exploitation:** Use protocols that handle errors poorly
4. **Timing interruptions:** Disconnect during critical transmission moments
### Expected Results & Why
- **Systematic data gaps:** Missing packets create regular corruption patterns
- **Network-specific artifacts:** Different protocols fail in characteristic ways
- **Authentic digital decay:** Real-world network failure simulation
- **Why it works:** Network protocols handle data loss differently, creating unique corruption signatures
***
## Recipe 22: Mobile App Ecosystem Corruption
**Best for:** Quick social media glitches, accessibility
### Ingredients
- **File Types:** Mobile-optimized images, vertical videos
- **Platform:** Smartphone apps
### Tools & Programs
- **Primary:** Glitch Lab (mobile), VSCO with glitch presets
- **Alternative:** Camera apps with manual corruption features
- **Cross-platform:** Upload/download through different apps for compound effects
### Settings & Parameters
1. **App-hopping technique:** Save image through multiple apps sequentially
2. **Compression exploitation:** Use apps with different compression algorithms
3. **Real-time processing:** Live camera effects with movement corruption
4. **Social platform filtering:** Exploit Instagram/TikTok upload compression
### Expected Results & Why
- **Mobile-native aesthetics:** Optimized for social media consumption
- **Compression artifacts:** Each app adds its own compression signature
- **Accessibility:** Create glitch art anywhere with phone
- **Why it works:** Mobile apps apply different optimization algorithms, creating layered corruption
***
## Recipe 23: ROM/Game File Corruption
**Best for:** Nostalgic gaming aesthetics, interactive glitches
### Ingredients
- **File Types:** Game ROM files, executable programs
- **Platform:** Emulation software
### Tools & Programs
- **Primary:** Game emulators (NES, SNES, Game Boy)
- **Tools:** Hex editors, ROM corruption utilities
- **Safety:** Work only on backup copies, never original files
### Settings & Parameters
1. **Corruption zones:** Target graphics data sections, avoid critical code
2. **Systematic corruption:** Change single bytes in graphics memory locations
3. **Real-time testing:** Run corrupted ROMs immediately to see effects
4. **Progressive corruption:** Gradually increase corruption until game breaks
### Expected Results & Why
- **Gaming nostalgia:** Creates familiar yet broken game environments
- **Interactive corruption:** Play through corrupted game worlds
- **Pixel-perfect artifacts:** Game engines render corrupted data consistently
- **Why it works:** Game graphics have predictable memory layouts, corruption creates systematic visual changes
***
## Recipe 24: Browser-Based File Corruption
**Best for:** Cross-platform accessibility, web-native workflows
### Ingredients
- **File Types:** Web-compatible formats (.JPG, .PNG, .GIF)
- **Platform:** Any web browser
### Tools & Programs
- **Primary:** Online corruption tools, browser developer tools
- **Method:** Exploit web technologies (Canvas API, WebGL, JavaScript)
- **Alternative:** Browser extensions for real-time page corruption
### Settings & Parameters
1. **Canvas manipulation:** Use browser Canvas API to corrupt pixel data
2. **WebGL shaders:** Apply corruption through graphics programming
3. **JavaScript automation:** Write scripts to systematically corrupt images
4. **Cross-origin exploitation:** Use browser security features to create artifacts
### Expected Results & Why
- **Web-native processing:** No software installation required
- **Real-time preview:** Instant feedback in browser environment
- **Cross-platform consistency:** Same results across different operating systems
- **Why it works:** Web technologies provide standardized corruption methods across platforms
***
## Recipe 25: Temporal Corruption Techniques
**Best for:** Time-based media, video art installations
### Ingredients
- **File Types:** Video files with temporal structure
- **Concept:** Corrupt time-based elements rather than spatial
### Tools & Programs
- **Primary:** Video editing software with scripting capabilities
- **Advanced:** Custom code for temporal manipulation
- **Method:** Target time-code, frame order, playback speed data
### Settings & Parameters
1. **Frame reordering:** Shuffle frame sequences pseudorandomly
2. **Time-code corruption:** Alter playback timing metadata
3. **Speed variation injection:** Insert random speed changes in timeline
4. **Temporal loops:** Create recursive time segments
### Expected Results & Why
- **Non-linear narratives:** Story structure breaks down in interesting ways
- **Rhythmic disruption:** Musical/rhythmic content becomes syncopated
- **Cognitive dissonance:** Familiar content becomes surreal through temporal displacement
- **Why it works:** Human perception of time in media follows predictable patterns; disruption creates artistic tension
***
## Recipe 26: Collaborative Corruption Networks
**Best for:** Community art projects, distributed creativity
### Ingredients
- **File Types:** Any shareable digital media
- **Platform:** File sharing networks, collaborative platforms
### Tools & Programs
- **Primary:** File sharing platforms, collaborative editing tools
- **Method:** Sequential corruption by multiple participants
- **Organization:** Shared folders with corruption rule sets
### Settings & Parameters
1. **Corruption chains:** Each participant corrupts and passes file to next person
2. **Rule-based systems:** Establish corruption constraints for consistency
3. **Documentation:** Track each corruption step for analysis
4. **Branching possibilities:** Create multiple corruption paths from single source
### Expected Results & Why
- **Collective aesthetics:** No single artist controls final outcome
- **Unexpected combinations:** Different corruption styles combine unpredictably
- **Social art process:** Community participation becomes part of artwork
- **Why it works:** Multiple corruption layers create complexity impossible for individual artists to achieve
***
## Recipe 27: Environmental Data Corruption
**Best for:** Site-specific art, environmental responsiveness
### Ingredients
- **File Types:** Real-time sensor data, environmental measurements
- **Equipment:** Sensors, microcontrollers, data logging devices
### Tools & Programs
- **Primary:** Arduino/Raspberry Pi with sensors
- **Data sources:** Temperature, humidity, electromagnetic field, GPS coordinates
- **Processing:** Real-time data visualization and corruption
### Settings & Parameters
1. **Sensor mapping:** Map environmental data to corruption parameters
2. **Real-time processing:** Apply corruption based on live environmental changes
3. **Location-specific:** GPS coordinates determine corruption algorithms
4. **Temporal variation:** Time-of-day affects corruption intensity
### Expected Results & Why
- **Site-specific aesthetics:** Artwork reflects actual environment conditions
- **Unpredictable variation:** Natural environmental changes create unique results
- **Responsive art:** Artwork changes based on viewer presence/interaction
- **Why it works:** Environmental data provides organic randomness impossible to simulate artificially
***
## Recipe 28: Cross-Format Ecosystem Corruption
**Best for:** Exploiting format conversion chains
### Ingredients
- **File Types:** Start with any format, cycle through multiple incompatible formats
### Tools & Programs
- **Primary:** Format conversion software with override capabilities
- **Method:** Force conversions through inappropriate format chains
- **Strategy:** Deliberately choose worst possible conversion paths
- **Documentation:** Track each conversion step for reproducibility
### Settings & Parameters
1. **Format chains:** JPG → RAW → MIDI → AVI → PDF → back to JPG
2. **Conversion forcing:** Override software safety checks
3. **Metadata preservation:** Keep conversion history in file metadata
4. **Error accumulation:** Let each conversion add its own artifacts
### Expected Results & Why
- **Compound artifacts:** Each format conversion adds unique corruption signature
- **Unpredictable outcomes:** Format incompatibilities create novel effects
- **Archaeological layers:** Final result contains "fossils" of each format
- **Why it works:** Each format has assumptions about data structure; violating these creates systematic corruption
***
# Combining Databending and Pixel Sorting: A Hybrid Workflow Guide
**Best for:** Hybrid Workflow Guide
## Understanding the Fundamental Difference
**Databending** corrupts the raw data of image files, creating unpredictable artifacts like color shifts, horizontal displacement, and textural noise. It's chaotic and organic[1].
**Pixel sorting** algorithmically rearranges pixels based on properties like brightness, hue, or saturation, creating organized streaks and flowing bands. It's controlled and mathematical[1].
## Workflow Method 1: Sequential Processing
### Step 1: Start with Databending
1. **Choose your databending method:** Audacity with echo and bass/treble effects (popular choice)[2], Text editor manipulation, Hex editor precision edits
2. **Apply light corruption first:** Keep the image recognizable, Focus on textural changes rather than structural breaks, Save multiple versions with varying corruption levels
### Step 2: Apply Pixel Sorting
1. **Use dedicated pixel sorting tools:** madpixelsort for Processing-based sorting[2], Kim Asendorf's original pixel sorting algorithm[1], GlitchKernel for multiple algorithm stacking[3]
2. **Key sorting parameters:** Set threshold values to preserve databent textures, Use brightness or saturation sorting to maintain corrupted color relationships, Apply sorting selectively to specific regions[3]
## Workflow Method 2: Layered Composition
This is the approach favored by experienced glitch artists[2]:
1. **Create multiple versions:** Generate 3-5 databent variations of your source image, Create 3-5 pixel-sorted versions using different parameters, Mix databending and pixel sorting on the same image
2. **Layer and blend:** Import all versions into Photoshop or similar software, Experiment with blend modes (Overlay, Screen, Multiply, Difference)
3. **Fine-tune the composite:** Adjust layer opacity to control effect intensity, Use masks to apply effects selectively, Add additional filters for cohesion
## Workflow Method 3: Region-Specific Application
Use tools like GlitchKernel that allow **selection regions**[3]:
1. **Databend specific areas:** Apply heavy corruption to background elements, Keep important subjects lightly processed
2. **Pixel sort complementary regions:** Sort areas that will flow into databent sections, Use different sorting algorithms for different regions[3]
## Technical Considerations
### File Format Strategy
- **Start with uncompressed formats** (.BMP, .TIFF) for cleaner databending
- **Convert to .JPG** between processes to add compression artifacts
- **End with high-resolution** formats to preserve detail in final composite
### Parameter Balancing
- **Heavy databending + light pixel sorting:** Emphasizes chaos with subtle organization
- **Light databending + heavy pixel sorting:** Creates flowing textures with subtle corruption
- **Equal intensity:** Produces maximum complexity but risks visual overload
### Timing and Order
The sequence matters significantly:
- **Databend → Pixel Sort:** Organizes corruption into flowing patterns
- **Pixel Sort → Databend:** Corrupts organized structures into chaos
- **Interleaved:** Apply light databending, then pixel sorting, then more databending
`;

/**
 * Parses a block of list-like text into an array of strings.
 * Cleans up markdown list markers, bolding, and citations.
 */
const parseList = (text: string | undefined): string[] => {
    if (!text) return [];
    return text.split('\n')
        .map(s => s.trim()
            .replace(/^(-|\d+\.|\*\*)\s*/, '')
            .replace(/:\*\*\s*/, ': ')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\[\d+\]/g, '')
            .trim())
        .filter(Boolean);
};

/**
 * Parses the "Settings & Parameters" section, preserving bold keywords.
 * Example: "1. **File prep:** Duplicate..." -> "<strong>File prep:</strong> Duplicate..."
 */
const parseInstructionList = (text: string | undefined): string[] => {
    if (!text) return [];
    return text.split('\n')
        .map(s => s.trim()
            .replace(/^\d+\.\s*/, '') // remove leading number like "1. "
            .replace(/\*\*([^*]+?):\*\*/, '<strong>$1:</strong>') // convert **Keyword:** to <strong>
            .replace(/\[\d+\]/g, '') // remove citations
            .trim())
        .filter(Boolean);
};


/**
 * Parses a "guide" style section, which has a less structured format than a recipe.
 */
const parseGuide = (title: string, bestFor: string, content: string): Recipe => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Treat major subheadings (##) as main sections of the guide
    const sections = content.split(/\n(?=##\s)/).map(s => s.trim());
    
    const ingredients: string[] = [];
    const toolsAndPrograms: string[] = [];
    const settingsAndParameters: string[] = [];
    const expectedResults: string[] = [];
    
    sections.forEach(section => {
        const lines = section.split('\n');
        const heading = lines.shift()?.replace('##', '').trim() || 'Details';
        const body = lines.join('\n');
        
        // Combine heading and body into a single entry for simplicity in guides
        const formattedEntry = `**${heading}**: ${body.replace(/###\s(.*?)\n/g, '\n- **$1**: ').replace(/^- /gm, '\n  - ')}`;
        
        if (/workflow|method|application|step/i.test(heading)) {
            settingsAndParameters.push(formattedEntry);
        } else if (/technical|consideration|parameter|timing/i.test(heading)) {
            toolsAndPrograms.push(formattedEntry);
        } else if (/understanding|difference|strategy/i.test(heading)){
            ingredients.push(formattedEntry);
        } else {
            expectedResults.push(formattedEntry);
        }
    });

    return {
        id,
        title,
        bestFor,
        ingredients,
        toolsAndPrograms,
        settingsAndParameters,
        expectedResults
    };
};

/**
 * A robust parser for the entire Glitch Art Cookbook text.
 * It processes the text sequentially, identifying volumes, recipes, and guides.
 */
export const parseCookbook = (): Section[] => {
    const sections: Section[] = [];
    let currentSection: Section | null = null;
    
    // Split the entire text by the '***' separator which cleanly divides recipes and guides.
    const entries = rawCookbookText.trim().split(/\n\s*\*{3,}\s*\n/);

    entries.forEach(entryText => {
        const text = entryText.trim();
        if (!text) return;

        // Check for a Volume title (H1) which defines a new section.
        const h1Match = text.match(/^# (.*?)\n/);
        if (h1Match) {
            const title = h1Match[1].trim();
            const subtitleMatch = text.match(/^\*(.*?)\*/m);
            let sectionTitle = title.replace('The Complete Glitch Art Cookbook - ', '');
            if (subtitleMatch) {
                sectionTitle = `${sectionTitle}: ${subtitleMatch[1].trim()}`;
            }
            const sectionId = sectionTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            currentSection = { id: sectionId, title: sectionTitle, recipes: [] };
            sections.push(currentSection);
        }
        
        // If there is no current section, create a default "Volume 1"
        if (!currentSection) {
            currentSection = { id: 'volume-1-core-recipes', title: 'Volume 1: Core Recipes', recipes: [] };
            sections.push(currentSection);
        }

        // Process H2 titles as recipes or guides within the current section.
        const h2Matches = text.split(/\n(?=## )/);
        h2Matches.forEach(recipeText => {
            const h2Match = recipeText.match(/^## (.*?)\n/);
            if (h2Match) {
                const fullTitle = h2Match[1].trim();
                const rTitle = fullTitle.replace(/Recipe \d+: /, '');
                const id = rTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

                const bestForMatch = recipeText.match(/\*\*Best for:\*\*\s*(.*)/);
                const bestFor = bestForMatch ? bestForMatch[1].trim() : 'General glitching';

                // Check if it's a standard recipe or a guide-style entry
                if (recipeText.includes('### Ingredients')) {
                    const ingredientsMatch = recipeText.match(/### Ingredients\n([\s\S]*?)(?=\n###|$)/);
                    const toolsMatch = recipeText.match(/### Tools & Programs\n([\s\S]*?)(?=\n###|$)/);
                    const settingsMatch = recipeText.match(/### Settings & Parameters\n([\s\S]*?)(?=\n###|$)/);
                    const resultsMatch = recipeText.match(/### Expected Results & Why\n([\s\S]*?)(?=\n\*\*\*|$)/);

                    currentSection?.recipes.push({
                        id,
                        title: rTitle,
                        bestFor,
                        ingredients: parseList(ingredientsMatch?.[1]),
                        toolsAndPrograms: parseList(toolsMatch?.[1]),
                        settingsAndParameters: parseInstructionList(settingsMatch?.[1]),
                        expectedResults: parseList(resultsMatch?.[1]),
                    });
                } else {
                    // It's a guide-style section (like Pro Tips)
                    const content = recipeText.substring(h2Match[0].length).trim();
                    const guideRecipe = parseGuide(rTitle, bestFor, content);
                    currentSection?.recipes.push(guideRecipe);
                }
            }
        });
    });

    // Handle the final "Combining" guide which is its own section and has a unique format
    const combiningGuideMatch = rawCookbookText.match(/# (Combining Databending and Pixel Sorting[\s\S]*)/);
    if(combiningGuideMatch){
        const text = combiningGuideMatch[1];
        const titleMatch = text.match(/^(.*?)\n/);
        const title = titleMatch ? titleMatch[1].trim() : "Hybrid Workflow Guide";
        
        const bestForMatch = text.match(/\*\*Best for:\*\*\s*(.*)/);
        const bestFor = bestForMatch ? bestForMatch[1].trim() : "Advanced Techniques";
        
        const content = text.substring(titleMatch ? titleMatch[0].length : 0);
        
        const guideRecipe = parseGuide(title, bestFor, content);
        
        let guideSection = sections.find(s => s.id === 'guides-workflows');
        if (!guideSection) {
            guideSection = { id: 'guides-workflows', title: 'Guides & Workflows', recipes: [] };
            sections.push(guideSection);
        }
        guideSection.recipes.push(guideRecipe);
    }

    return sections.filter(s => s.recipes.length > 0);
};

export const cookbookData = parseCookbook();